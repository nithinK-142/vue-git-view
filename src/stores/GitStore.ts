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
  }),
  actions: {
    async getUser(): Promise<void> {
      try {
        this.isUserLoading = true;
        const response = await axios.get(
          `https://api.github.com/users/${this.searchUser}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        this.user = response.data;
        this.totalPages = Math.ceil(response.data.public_repos / this.perPage);
      } finally {
        this.isUserLoading = false;
      }
    },
    async getRepos(): Promise<void> {
      try {
        this.isReposLoading = true;
        const response = await axios.get(
          `https://api.github.com/users/${this.searchUser}/repos?page=${this.currPage}&per_page=${this.perPage}&sort=updated`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        this.repos = response.data;
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
      this.searchUser = user;
      this.currPage = 1;
      this.getUser();
      this.getRepos();
    },
  },
});
