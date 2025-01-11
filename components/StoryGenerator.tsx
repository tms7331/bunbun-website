'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OpenAI } from 'openai';
const chatgptKey = process.env.NEXT_PUBLIC_CHATGPT_KEY;
const openai = new OpenAI({ apiKey: chatgptKey, dangerouslyAllowBrowser: true });


async function generateStory(theme: string) {
  const defaultThemes = ["forest", "birthday", "Christmas", "party"];
  if (!theme) {
    theme = defaultThemes[Math.floor(Math.random() * defaultThemes.length)];
  }
  const msg = "Generate a story for 5-year-old BunBun with the theme: " + theme;
  const completion = await openai.chat.completions.create({
    messages: [{
      'role': 'system',
      'content': "You are a storyteller for children, and will generate stories that are 2-3 paragraphs about BunBun, a 5 year old rabbit"
    },
    {
      'role': 'user',
      'content': msg,
    },
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);
  return completion.choices[0].message["content"];
}


export default function StoryGenerator() {
  const [story, setStory] = useState<string | null>(null)
  const [theme, setTheme] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateStory = async () => {
    setIsLoading(true)
    try {
      const generatedStory = await generateStory(theme)
      setStory(generatedStory)
    } finally {
      setIsLoading(false)
    }
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
      <Button
        onClick={handleGenerateStory}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate BunBun Story'}
      </Button>
      {story && (
        <div className="p-4 bg-white bg-opacity-50 rounded-lg shadow">
          <p className="text-lg">{story}</p>
        </div>
      )}
    </div>
  )
}

