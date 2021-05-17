export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export interface RepositoryProps {
    repository: { 
        name: string;
        description: string;
        html_url: string;
    }
}