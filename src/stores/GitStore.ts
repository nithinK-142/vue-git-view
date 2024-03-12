import { defineStore } from "pinia";
import axios from "axios";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio?: string;
  company?: string;
  location?: string;
  blog?: string;
  html_url: string;
  followers: number;
  following: number;
}

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

export const useGithubStore = defineStore({
  id: "github",
  state: () => ({
    searchUser: localStorage.getItem("searchTerm") || "nithinK-142",
    totalPages: 0,
    currPage: 1,
    perPage: 6,
    repos: [] as Repo[],
    user: null as User | null,
    isUserLoading: false,
    isReposLoading: false,
    error: null as string | null,
    remainingRequests: 0,
  }),
  actions: {
    async getUser(): Promise<void> {
      try {
        this.isUserLoading = true;
        const response = await axios.get(
          `https://api.github.com/users/${this.searchUser}`
          // {
          //   headers: {
          //     Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          //   },
          // }
        );

        this.remainingRequests = response.headers["x-ratelimit-remaining"];

        this.user = response.data;
        this.totalPages = Math.ceil(response.data.public_repos / this.perPage);
      } catch (error: any) {
        if (error.response.status === 404) {
          this.error = "User not found!";
        } else if (error.response.status === 403) {
          this.error = "Oh no, you hit the rate limit! Try again later.";
        } else {
          this.error = "Oh no! Something went wrong. Try again later!";
        }
      } finally {
        this.isUserLoading = false;
      }
    },
    async getRepos(): Promise<void> {
      try {
        this.isReposLoading = true;
        const response = await axios.get(
          `https://api.github.com/users/${this.searchUser}/repos?page=${this.currPage}&per_page=${this.perPage}&sort=updated`
          // {
          //   headers: {
          //     Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          //   },
          // }
        );

        this.remainingRequests = response.headers["x-ratelimit-remaining"];

        this.repos = response.data;
      } catch (error: any) {
        if (error.response.status === 403) {
          this.error = "Oh no, you hit the rate limit! Try again later.";
        } else {
          this.error = "Oh no! Something went wrong. Try again later!";
        }
      } finally {
        this.isReposLoading = false;
      }
    },
    async nextPage(): Promise<void> {
      if (this.currPage < this.totalPages) {
        this.currPage++;
        await this.getRepos();
      }
    },
    async prevPage(): Promise<void> {
      if (this.currPage > 1) {
        this.currPage--;
        await this.getRepos();
      }
    },
    async setSearchUser(user: string): Promise<void> {
      this.error = null;
      this.searchUser = user;
      this.repos = [];
      this.user = null;
      this.currPage = 1;
      this.totalPages = 0;
      await this.getUser();
      if (!this.error) {
        await this.getRepos();
      }
    },
  },
});
