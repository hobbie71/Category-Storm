const ColorSystem = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="font-heading text-6xl text-primary-500">
            Category Storm!
          </h1>
          <p className="font-subheading text-xl text-gray-600">
            An interactive educational game for classrooms
          </p>
        </div>

        {/* Color Showcase */}
        <div className="space-y-6">
          <h2 className="font-subheading text-3xl text-primary-600">
            Color System
          </h2>

          {/* Primary Colors */}
          <div className="space-y-4">
            <h3 className="font-subheading text-xl text-gray-800">
              Primary Colors
            </h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-primary-100 p-4 rounded-lg text-center">
                <div className="text-sm font-mono">primary-100</div>
              </div>
              <div className="bg-primary-300 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">primary-300</div>
              </div>
              <div className="bg-primary-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">primary-500</div>
              </div>
              <div className="bg-primary-700 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">primary-700</div>
              </div>
              <div className="bg-primary-900 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">primary-900</div>
              </div>
            </div>
          </div>

          {/* Accent Colors */}
          <div className="space-y-4">
            <h3 className="font-subheading text-xl text-gray-800">
              Accent Colors
            </h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-accent-100 p-4 rounded-lg text-center">
                <div className="text-sm font-mono">accent-100</div>
              </div>
              <div className="bg-accent-300 p-4 rounded-lg text-center">
                <div className="text-sm font-mono">accent-300</div>
              </div>
              <div className="bg-accent-500 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">accent-500</div>
              </div>
              <div className="bg-accent-700 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">accent-700</div>
              </div>
              <div className="bg-accent-900 p-4 rounded-lg text-center text-white">
                <div className="text-sm font-mono">accent-900</div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Text Effects */}
        <div className="space-y-6">
          <h2 className="font-subheading text-3xl text-accent-600">
            Custom Text Effects
          </h2>
          <div className="space-y-4">
            <p className="text-playful text-lg">
              This is playful text with custom styling!
            </p>
            <p className="text-bouncy text-lg">
              This is bouncy uppercase text!
            </p>
            <span className="text-bubble">Bubble Text Effect!</span>
            <p className="text-fun text-lg">
              This is fun text with accent color!
            </p>
            <p className="text-rainbow text-2xl font-bold">
              Rainbow gradient text!
            </p>
            <p className="text-highlight">
              This text has a highlight background!
            </p>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-6">
          <h2 className="font-subheading text-3xl text-primary-600">
            Interactive Examples
          </h2>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-subheading transition-colors">
              Primary Button
            </button>
            <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-subheading transition-colors">
              Accent Button
            </button>
            <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-subheading transition-all">
              Outline Button
            </button>
          </div>
        </div>

        {/* Typography Showcase */}
        <div className="space-y-4">
          <h2 className="font-subheading text-3xl text-accent-600">
            Typography
          </h2>
          <h1 className="font-heading">Heading Font (Comic Sans MS)</h1>
          <h2 className="font-subheading">Subheading Font (Trebuchet MS)</h2>
          <p className="font-body">
            Body Font (Verdana) - This is used for readable body text.
          </p>
          <code className="font-mono bg-gray-100 px-2 py-1 rounded">
            Mono Font (Courier New)
          </code>
        </div>
      </div>
    </div>
  );
};

export default ColorSystem;
