import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, DollarSign, Clock, Target, AlertTriangle, Users, Laugh } from 'lucide-react';

export default function DigitalParadox() {
  const [selectedCard, setSelectedCard] = useState(null);

  const paradoxes = [
    {
      title: '"Healthy" Usage of Addictive Systems',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      corporate: "We care about your digital wellbeing!",
      reality: "Our systems are designed to override your self-control",
      examples: [
        "30-minute daily limit settings in apps designed to be used 24/7",
        "Wellness features in platforms optimized for addiction",
        "Digital health tools that keep you engaged longer",
        "Mindfulness reminders that lead to more scrolling"
      ]
    },
    {
      title: '"Ethical" Corporate Practices',
      icon: <Heart className="w-8 h-8 text-red-600" />,
      corporate: "Your privacy and wellbeing matter to us!",
      reality: "Every interaction is monitored and monetized",
      examples: [
        "Privacy policies that allow complete data harvesting",
        "Wellness features that collect more personal data",
        "User protection that requires more user engagement",
        "Safety measures that increase platform dependency"
      ]
    },
    {
      title: '"Free" Services',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      corporate: "Our platform is completely free to use!",
      reality: "You pay with your time, data, and mental health",
      examples: [
        "Free services that cost hours of daily attention",
        "No-cost apps that harvest valuable personal data",
        "Free platforms that create expensive addictions",
        "Zero-dollar services with high psychological costs"
      ]
    },
    {
      title: '"Social" Connection',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      corporate: "Connect with friends and family!",
      reality: "Replace genuine relationships with digital dopamine hits",
      examples: [
        "Social features that increase loneliness",
        "Connection tools that create isolation",
        "Community features that divide people",
        "Relationship platforms that damage real bonds"
      ]
    }
  ];

  const morningRoutine = {
    title: "A 'Healthy' Digital Morning",
    steps: [
      {
        time: "7:00 AM",
        corporate: "Check your wellness app for sleep quality",
        reality: "Start your day with screen time"
      },
      {
        time: "7:15 AM",
        corporate: "Get motivated with inspiring social media posts",
        reality: "Compare yourself to curated highlights"
      },
      {
        time: "7:30 AM",
        corporate: "Stay informed with personalized news",
        reality: "Get trapped in engagement algorithms"
      },
      {
        time: "8:00 AM",
        corporate: "Connect with friends' updates",
        reality: "Feel anxiety about others' activities"
      }
    ]
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-purple-600 flex items-center justify-center gap-2">
            <Laugh className="w-8 h-8" />
            The Digital Paradox: Corporate "Care" vs Reality
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Main Paradoxes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {paradoxes.map((paradox, index) => (
              <Card 
                key={index}
                className={`p-4 cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                  selectedCard === index ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
              >
                <div className="flex items-center gap-2 mb-3">
                  {paradox.icon}
                  <h3 className="font-bold text-lg">{paradox.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-semibold">Corporate Message:</p>
                    <p className="text-green-600 italic">{paradox.corporate}</p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-700 font-semibold">Reality:</p>
                    <p className="text-red-600">{paradox.reality}</p>
                  </div>

                  {selectedCard === index && (
                    <div className="bg-gray-50 p-3 rounded-lg mt-3">
                      <p className="font-semibold mb-2">Examples:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {paradox.examples.map((example, i) => (
                          <li key={i} className="text-gray-700">{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Morning Routine Timeline */}
          <Card className="p-4 bg-gray-50">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-gray-600" />
              {morningRoutine.title}
            </h3>
            <div className="space-y-4">
              {morningRoutine.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 font-bold text-gray-600">{step.time}</div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-green-600 text-sm">{step.corporate}</p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-red-600 text-sm">{step.reality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h3 className="font-bold text-lg text-yellow-800">Remember:</h3>
            </div>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Companies design "features" to increase engagement, not wellbeing
              </li>
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                "Healthy usage" of addictive systems is a contradiction
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                True digital wellbeing often means complete detachment
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Real relationships don't require constant digital validation
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
