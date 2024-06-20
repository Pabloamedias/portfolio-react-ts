import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { readData } from '../config/firebase';
import { DataProject } from '../interface';

interface ProjectsContextProps {
  projects: DataProject[] | null;
  loading: boolean;
  error: Error | null;
}

interface ProjectsProviderProps {
    children: ReactNode;
  }

const ProjectsContext = createContext<ProjectsContextProps | undefined>(undefined);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const [projects, setProjects] = useState<DataProject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("fetchProjects")
    const fetchProjects = async () => {
      try {
        const data = await readData('/') as DataProject[];
        setProjects(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
