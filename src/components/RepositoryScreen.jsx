import React from "react";
import "../styles/RepositoryScreen.css";

function RepositoryScreen() {
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "JavaScript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
  ];

  return (
    <div className="repository-container">
      <header className="repository-header">
        <h1>Repositories</h1>
        <input type="text" placeholder="Search Repositories" />
        <button>Add Repository</button>
      </header>
      <ul className="repository-list">
        {repositories.map((repo, index) => (
          <li key={index} className="repository-item">
            <h3>{repo.name}</h3>
            <p>
              {repo.language} - {repo.size} - {repo.updated}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryScreen;
