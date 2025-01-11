'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { generateStory } from '../actions'

export async function generateStory(theme: string): Promise<string> {
  // In a real application, you might call an AI service here
  // For now, we'll return a predefined story based on the theme
  const stories = {
    adventure: [
      "5-year-old BunBun hopped on a tiny hot air balloon and floated over fields of carrots, marveling at the world below.",
      "BunBun, at the tender age of 5, discovered a secret tunnel that led to a magical forest full of talking vegetables.",
    ],
    friendship: [
      "BunBun, now 5 years old, made a new friend today - a curious squirrel who shared his acorns and taught BunBun how to climb trees.",
      "5-year-old BunBun organized a tea party for all the young animals in the garden, serving carrot cake and clover tea.",
    ],
    garden: [
      "BunBun, at 5 years old, learned how to plant his own carrot seeds and watched with excitement as they grew into delicious treats.",
      "The 5-year-old BunBun had an exciting adventure exploring a nearby vegetable garden, tasting new flavors and making plant friends.",
    ],
    default: [
      "5-year-old BunBun spent the day hopping through fields of flowers, enjoying the sunshine and playing hide-and-seek with butterflies.",
      "BunBun, now a playful 5-year-old, learned how to do a binky jump today, leaping and twisting in the air with joy!",
    ]
  }

  const themeStories = stories[theme.toLowerCase() as keyof typeof stories] || stories.default
  return themeStories[Math.floor(Math.random() * themeStories.length)]
}


export default function StoryGenerator() {
  const [story, setStory] = useState<string | null>(null)
  const [theme, setTheme] = useState('')

  const handleGenerateStory = async () => {
    const generatedStory = await generateStory(theme)
    setStory(generatedStory)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="theme" className="text-sm font-medium">
          Enter a theme for 5-year-old BunBun's story:
        </label>
        <Input
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="e.g., adventure, friendship, garden"
          className="w-full"
        />
      </div>
      <Button onClick={handleGenerateStory} className="w-full">
        Generate BunBun Story
      </Button>
      {story && (
        <div className="p-4 bg-white bg-opacity-50 rounded-lg shadow">
          <p className="text-lg">{story}</p>
        </div>
      )}
    </div>
  )
}

