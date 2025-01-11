import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StoryGenerator from '@/components/StoryGenerator'
import { NavigableGallery } from '@/components/NavigableGallery'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">BunBun's Magical World</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Meet BunBun</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <NavigableGallery />
                <p className="text-center text-lg">BunBun is an adorable 5-year-old bunny with a heart full of adventure!</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">BunBun's Story Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <StoryGenerator />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

