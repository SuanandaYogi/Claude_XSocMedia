import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Brain, Heart, Clock, DollarSign, AlertTriangle, Activity, Share2, Eye, Battery, Users } from 'lucide-react';

export default function SocialMediaStrategy() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const platforms = [
    {
      name: "Instagram",
      icon: <Eye className="w-6 h-6 text-pink-600" />,
      features: [
        {
          name: "Stories that disappear in 24 hours",
          strategy: "Create urgency and frequent checking behavior",
          impact: "Anxiety about missing updates",
          psychological: "Fear of missing out on social information",
          corporate: "Increased daily active usage",
          behavioral: "Compulsive app opening"
        },
        {
          name: "Active now status",
          strategy: "Create social pressure to respond",
          impact: "Anxiety about social obligations",
          psychological: "Fear of social exclusion",
          corporate: "Extended user engagement time",
          behavioral: "Difficulty disconnecting"
        },
        {
          name: "Algorithmic feed",
          strategy: "Show 'best moments' to create social comparison",
          impact: "Decreased life satisfaction",
          psychological: "Constant social comparison",
          corporate: "Increased engagement time",
          behavioral: "Addictive scrolling"
        }
      ]
    },
    {
      name: "TikTok",
      icon: <Activity className="w-6 h-6 text-red-600" />,
      features: [
        {
          name: "Infinite scroll design",
          strategy: "Remove natural stopping points",
          impact: "Lost sense of time",
          psychological: "Dopamine loop exploitation",
          corporate: "Maximized watch time",
          behavioral: "Extended viewing sessions"
        },
        {
          name: "For You page personalization",
          strategy: "Create perfectly targeted content stream",
          impact: "Increased platform dependency",
          psychological: "Dopamine-driven content consumption",
          corporate: "Enhanced user retention",
          behavioral: "Regular checking habits"
        },
        {
          name: "Trending challenges",
          strategy: "Create viral participation pressure",
          impact: "Social pressure to participate",
          psychological: "Fear of social irrelevance",
          corporate: "Increased content creation",
          behavioral: "Mimetic behavior"
        }
      ]
    },
    {
      name: "LinkedIn",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      features: [
        {
          name: "Career achievement showcasing",
          strategy: "Trigger professional anxiety",
          impact: "Career-based social comparison",
          psychological: "Professional inadequacy feelings",
          corporate: "Increased platform engagement",
          behavioral: "Compulsive profile updating"
        },
        {
          name: "Profile views counter",
          strategy: "Create curiosity and anxiety",
          impact: "Professional FOMO",
          psychological: "Career anxiety",
          corporate: "Premium subscription sales",
          behavioral: "Regular profile checking"
        },
        {
          name: "Job opportunity urgency",
          strategy: "Create career fear",
          impact: "Increased platform dependency",
          psychological: "Fear of missing opportunities",
          corporate: "Enhanced user retention",
          behavioral: "Frequent job searching"
        }
      ]
    }
  ];

  const impactCategories = [
    {
      title: "Psychological Impact",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      effects: [
        "Increased anxiety and stress",
        "Decreased self-esteem",
        "FOMO and social anxiety",
        "Attention problems",
        "Depression symptoms"
      ]
    },
    {
      title: "Behavioral Changes",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      effects: [
        "Compulsive checking",
        "Reduced attention span",
        "Changed social patterns",
        "Sleep disruption",
        "Addictive usage"
      ]
    },
    {
      title: "Time Cost",
      icon: <Clock className="w-6 h-6 text-green-600" />,
      effects: [
        "Lost productivity",
        "Decreased real interactions",
        "Reduced focus time",
        "Sleep deprivation",
        "Wasted leisure time"
      ]
    },
    {
      title: "Corporate Gain",
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      effects: [
        "Increased ad revenue",
        "Data collection",
        "User profiling",
        "Behavior prediction",
        "Targeted marketing"
      ]
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-purple-600 flex items-center justify-center gap-2">
            <Share2 className="w-8 h-8" />
            Social Media Exploitation Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Platform Selection */}
          <div className="flex gap-4 mb-6 overflow-x-auto p-2">
            {platforms.map((platform, index) => (
              <Card 
                key={index}
                className={`p-4 cursor-pointer flex items-center gap-2 min-w-[150px] ${
                  selectedPlatform === index ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                }`}
                onClick={() => setSelectedPlatform(selectedPlatform === index ? null : index)}
              >
                {platform.icon}
                <span className="font-bold">{platform.name}</span>
              </Card>
            ))}
          </div>

          {/* Feature Analysis */}
          {selectedPlatform !== null && (
            <div className="space-y-4 mb-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                {platforms[selectedPlatform].icon}
                {platforms[selectedPlatform].name} Features Analysis
              </h3>
              {platforms[selectedPlatform].features.map((feature, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold mb-3">{feature.name}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-700">Strategy:</p>
                      <p className="text-blue-600">{feature.strategy}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="font-semibold text-red-700">Impact:</p>
                      <p className="text-red-600">{feature.impact}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-purple-700">Psychological Effect:</p>
                      <p className="text-purple-600">{feature.psychological}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-semibold text-green-700">Corporate Goal:</p>
                      <p className="text-green-600">{feature.corporate}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Impact Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactCategories.map((category, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  {category.icon}
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.effects.map((effect, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      {effect}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Warning Section */}
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Battery className="w-6 h-6 text-yellow-600" />
              <h3 className="font-bold text-lg text-yellow-800">Protect Your Digital Wellbeing:</h3>
            </div>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Each feature is designed to maximize engagement, not wellbeing
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Psychological triggers are scientifically engineered for addiction
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Real connections don't require constant digital validation
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Your time and attention are valuable - protect them
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
