import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '@/components/Layouts'
import { HomeScreen } from '@/screens/Home'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Layout>
          <HomeScreen />
        </Layout>
      </div>
    </QueryClientProvider>
  )
}
export default App
