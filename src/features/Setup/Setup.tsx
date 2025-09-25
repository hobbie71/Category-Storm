import { useState } from "react";

// Context imports
import { useCurrentPage } from "../../contexts/CurrentPage/useCurrentPage";

// Type imports
import { Page } from "../../types/pages";

// Component imports
import Section from "../../components/Section";
import HowToPlayStep from "./components/HowToPlayStep";
import EducationalBenefit from "./components/EducationalBenefit";
import CategoryExample from "./components/CategoryExample";
import TipItem from "./components/TipItem";
import TipsList from "./components/TipsList";
import { BulletTipItem } from "./components/TipItem";
import TimeInput from "./components/TimeInput";
import Button from "../../components/Button";

const Setup = () => {
  const { setCurrentPage } = useCurrentPage();

  const [showExtraInformation, setShowExtraInformation] =
    useState<boolean>(false);

  return (
    <div className="page">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <Section className="text-center space-y-6">
          <h4 className="font-heading text-3xl">
            Category Storm! Teacher Setup
          </h4>

          {/* Toggle Extra Information Button */}
          <Button
            onClick={() => setShowExtraInformation(!showExtraInformation)}>
            Need Additional Help?
          </Button>
        </Section>

        {showExtraInformation && (
          <div className="space-y-12">
            {/* Game Description */}
            <Section variant="bordered" className="text-center">
              <h3 className="font-subheading ">What is Category Storm?</h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed m-0">
                Students see a category on the projected screen and race to
                write as many things from that category as they can before time
                runs out!
              </p>

              {/* Example Categories */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-subheading text-2xl text-accent-600 mb-4 text-center">
                  Example Categories:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <CategoryExample
                    category="Animals that swim"
                    variant="primary"
                  />
                  <CategoryExample
                    category="Things in a kitchen"
                    variant="accent"
                  />
                  <CategoryExample
                    category="Programming languages"
                    variant="primary"
                  />
                  <CategoryExample
                    category="Countries in Asia"
                    variant="accent"
                  />
                  <CategoryExample
                    category="Words that rhyme with 'code'"
                    variant="primary"
                  />
                  <CategoryExample category="Math terms" variant="accent" />
                </div>
              </div>
            </Section>
            {/* How to Play Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <Section>
                <h4 className="font-subheading text-4xl text-accent-600">
                  How to Play
                </h4>
                <div className="space-y-4">
                  <HowToPlayStep
                    stepNumber={1}
                    title="Setup"
                    description="Project the game on your classroom whiteboard"
                  />
                  <HowToPlayStep
                    stepNumber={2}
                    title="Show Category"
                    description="A category appears on screen with a countdown timer"
                  />
                  <HowToPlayStep
                    stepNumber={3}
                    title="Race Time"
                    description="Students run to the whiteboard and write their answers"
                  />
                  <HowToPlayStep
                    stepNumber={4}
                    title="Count Up"
                    description="When time ends, count the valid answers together"
                  />
                  <HowToPlayStep
                    stepNumber={5}
                    title="Next Round"
                    description="Try a new category!"
                  />
                </div>
              </Section>

              {/* Educational Benefits */}
              <Section>
                <h4 className="font-subheading text-4xl text-accent-600">
                  Why It's Great for Learning
                </h4>
                <div className="space-y-4">
                  <EducationalBenefit
                    title="Builds Vocabulary"
                    description="Students think of lots of words quickly"
                    variant="accent"
                  />
                  <EducationalBenefit
                    title="Gets Kids Moving"
                    description="Physical activity keeps them engaged"
                    variant="primary"
                  />
                  <EducationalBenefit
                    title="Works as a Team"
                    description="Everyone can contribute ideas"
                    variant="accent"
                  />
                  <EducationalBenefit
                    title="Fits Any Subject"
                    description="Use categories that match your lessons"
                    variant="primary"
                  />
                </div>
              </Section>
            </div>

            {/* Teacher Tips */}
            <Section variant="bordered">
              <h4 className="font-subheading text-4xl text-primary-600 text-center mb-8">
                Teacher Tips
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <TipItem icon="⏱️" text="Keep rounds short (30-60 seconds)" />
                  <TipItem
                    icon="🎯"
                    text="Mix fun categories with educational ones"
                  />
                  <TipItem icon="🤝" text="Let students help each other" />
                </div>
                <div className="space-y-3">
                  <TipItem icon="🎉" text="Celebrate creative answers" />
                  <TipItem
                    icon="🧠"
                    text="Use it to start lessons or as a brain break"
                  />
                  <TipItem
                    icon="📚"
                    text="Customize for any academic subject"
                  />
                </div>
              </div>
            </Section>

            {/* Classroom Management Tips */}
            <Section variant="bordered">
              <h4 className="font-subheading text-3xl text-primary-600 text-center mb-6">
                Classroom Management Tips
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <TipsList title="Before Starting:" variant="accent">
                  <BulletTipItem
                    text="Set clear rules about taking turns at the board"
                    variant="primary"
                  />
                  <BulletTipItem
                    text="Explain what makes a 'valid' answer"
                    variant="primary"
                  />
                  <BulletTipItem
                    text="Have extra markers ready"
                    variant="primary"
                  />
                  <BulletTipItem
                    text="Consider appointing 'cheerleaders' for shy students"
                    variant="primary"
                  />
                </TipsList>
                <TipsList title="During the Game:" variant="accent">
                  <BulletTipItem
                    text="Encourage team collaboration"
                    variant="accent"
                  />
                  <BulletTipItem
                    text="Accept creative but valid interpretations"
                    variant="accent"
                  />
                  <BulletTipItem
                    text="Use as a teachable moment for new vocabulary"
                    variant="accent"
                  />
                  <BulletTipItem
                    text="Keep energy high with positive reinforcement"
                    variant="accent"
                  />
                </TipsList>
              </div>
            </Section>
          </div>
        )}

        {/* Game Setup Section */}
        <Section variant="bordered">
          <h4 className="font-subheading text-4xl text-primary-600 text-center mb-8">
            Game Setup
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-row justify-around items-center">
              <label className="font-subheading text-lg text-primary-600 font-bold">
                Game Time
              </label>
              <TimeInput />
            </div>
          </div>
        </Section>

        {/* Start Button for Teachers */}
        <Section variant="centered">
          <div className="space-y-6">
            <h4 className="font-subheading text-3xl text-gray-700">
              Ready to project the game onto the board?
            </h4>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setCurrentPage(Page.GamePreview)}
              className="text-2xl px-12 py-6 font-heading shadow-2xl transform hover:scale-105 transition-transform duration-200">
              📺 Project Game Preview
            </Button>
            <p className="text-gray-500 text-lg">
              Drag or cast this app to the projector and make it full screen
              after pressing this button
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Setup;
