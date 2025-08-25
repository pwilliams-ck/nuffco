"use client";

interface BrutalistBackgroundProps {
  density?: 'light' | 'medium' | 'heavy' | 'chaos';
}

export const BrutalistBackground = ({ density = 'medium' }: BrutalistBackgroundProps) => {
  // Generate shapes based on density
  const getShapeCount = () => {
    switch (density) {
      case 'light': return 8;
      case 'medium': return 16;
      case 'heavy': return 24;
      case 'chaos': return 32;
      default: return 16;
    }
  };

  const shapes = [];
  const shapeCount = getShapeCount();
  
  // Colors, sizes, and positions for the chaos
  const colors = [
    'bg-red-400', 'bg-blue-500', 'bg-pink-500', 'bg-yellow-400', 
    'bg-purple-500', 'bg-orange-400', 'bg-cyan-400', 'bg-lime-500',
    'bg-indigo-500', 'bg-green-500', 'bg-rose-400', 'bg-amber-400'
  ];
  
  const sizes = [
    'w-4 h-4', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10', 'w-12 h-12',
    'w-4 h-8', 'w-6 h-12', 'w-8 h-16', 'w-10 h-20', 'w-12 h-24',
    'w-16 h-4', 'w-20 h-6', 'w-24 h-8'
  ];
  
  const rotations = [
    'rotate-0', 'rotate-12', 'rotate-45', '-rotate-12', '-rotate-45', 
    'rotate-30', '-rotate-30', 'rotate-60', '-rotate-60', 'rotate-15'
  ];

  // Generate random shapes
  for (let i = 0; i < shapeCount; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const rotation = rotations[Math.floor(Math.random() * rotations.length)];
    const isRounded = Math.random() > 0.7;
    
    // Random positioning
    const top = Math.random() * 80 + 5; // 5% to 85%
    const left = Math.random() * 80 + 5; // 5% to 85%
    const opacity = Math.random() * 0.2 + 0.1; // 0.1 to 0.3
    
    shapes.push({
      id: i,
      color,
      size,
      rotation,
      top: `${top}%`,
      left: `${left}%`,
      opacity,
      isRounded
    });
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`
            absolute ${shape.size} ${shape.color} 
            border-2 border-black dark:border-white transform ${shape.rotation}
            ${shape.isRounded ? 'rounded-full' : ''}
          `}
          style={{ 
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity
          }}
        />
      ))}
    </div>
  );
};