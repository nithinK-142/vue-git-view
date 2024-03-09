// src/store/github.ts
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

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

export const useGithubStore = defineStore({
  id: "github",
  state: () => ({
    searchSubject: localStorage.getItem("searchTerm") || "nithinK-142",
    totalPages: 0,
    currPage: 1,
    perPage: 6,
    repos: [] as Repository[],
    user: null as User | null,
  }),
  actions: {
    async getUser(): Promise<void> {
      const response = await axios.get(
        `https://api.github.com/users/${this.searchSubject}`
      );
      this.user = response.data;
      this.totalPages = Math.ceil(response.data.public_repos / this.perPage);
    },
    async getRepos(): Promise<void> {
      const response = await axios.get(
        `https://api.github.com/users/${this.searchSubject}/repos`,
        {
          params: {
            page: this.currPage,
            per_page: this.perPage,
          },
        }
      );
      this.repos = response.data;
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

    setCurrPage(pageNumber: number): void {
      this.currPage = pageNumber;
    },
    setTotalPages(pages: number): void {
      this.totalPages = pages;
    },
  },
});

// async getLanguages(url: string): Promise<any> {
//   const response = await axios.get(url);
//   return response.data;
// },
// setrepos(newrepos: Repository[]): void {
//   this.repos = newrepos;
// },
// getStoredSearchTerm(): string {
//   return localStorage.getItem("searchTerm") || "";
// },
// setCurrPage(pageNumber: number): void {
//   this.currPage = pageNumber;
// },
// setSearchTerm(term: string): void {
//   localStorage.setItem("searchTerm", term);
//   this.searchSubject = term;
// },
// setTotalPages(pages: number): void {
//   this.totalPages = pages;
// },
