/** React */
import { useEffect, useState } from "react"

/** Components */
import { RepositoryItem } from "./RepositoryItem";
import { Repository } from "../interfaces/RepositoryInterfaces";

/** Styles */
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de respositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
