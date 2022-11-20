import "./App.css";
import Quiz from "./components/quiz";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <main className="App">
      <QueryClientProvider client={client}>
        <Quiz />
      </QueryClientProvider>
    </main>
  );
}

export default App;
