import React, { useState } from 'react';
import { X } from 'lucide-react';

const EnchantedValleyMap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Definitions for tooltips
  const definitions: Record<string, { title: string; definition: string; citation: string }> = {
    'Village Model': {
      title: 'The Village Model of Social and Emotional Development',
      definition: 'A framework emphasizing that healthy child development emerges from interconnected support systems—family, peers, school, and community—working together with consistency and shared values, much like a traditional village raising a child.',
      citation: 'Bronfenbrenner (1979); Rogoff (2003)'
    },
    'Emotional Regulation': {
      title: 'Emotional Regulation Socialization',
      definition: 'Processes through which children learn how to monitor, express, and modify their emotional reactions. Parents, teachers, peers, and cultural norms shape children\'s strategies for regulating emotions.',
      citation: 'Morris et al., as cited in course textbook'
    },
    'Identity Development': {
      title: 'Identity Development',
      definition: 'How children and adolescents form a stable sense of self, including personal values, cultural identity, gender identity, and their roles within the community.',
      citation: 'Erikson\'s psychosocial theory; textbook chapter on identity'
    },
    'Peer Relationships': {
      title: 'Peer Relationships',
      definition: 'The social interactions, friendships, and group dynamics that influence children\'s social skills, emotional development, and sense of belonging.',
      citation: 'Rubin et al., textbook chapter on peers'
    },
    'Moral Development': {
      title: 'Moral Development',
      definition: 'The gradual internalization of societal values, norms, and ethical principles that guide judgments of right and wrong.',
      citation: 'Kohlberg, Turiel, plus textbook discussion of moral reasoning'
    },
    'Consistency': {
      title: 'Consistency Across Contexts',
      definition: 'When expectations, values, and behavioral norms at home, school, and community are aligned, reducing confusion and strengthening resilience.',
      citation: ''
    },
    'Shared Identity': {
      title: 'Shared Identity and Belonging',
      definition: 'A collective sense of purpose and membership that supports emotional well-being, empathy, and motivation.',
      citation: ''
    },
    'Co-Regulation': {
      title: 'Emotional Buffering & Co-Regulation',
      definition: 'Support from adults and peers during emotional distress, teaching children healthy regulation strategies.',
      citation: ''
    },
    'Peer Learning': {
      title: 'Peer-Based Learning',
      definition: 'Peers modeling behavior, coping, moral choices, and social skills in ways that are often more influential than adult instruction.',
      citation: ''
    },
    'Collective Wisdom': {
      title: 'Collective Advice & Wisdom',
      definition: 'Shared cultural knowledge and guidance from multiple generations that provides children with diverse perspectives and problem-solving strategies.',
      citation: ''
    },
    'Individual Strengths': {
      title: 'Recognition of Individual Strengths',
      definition: 'Acknowledging each child\'s unique traits and talents, allowing them to contribute meaningfully to the community.',
      citation: ''
    }
  };

  const closeModal = () => setSelectedNode(null);

  // Get base path for images
  const basePath = import.meta.env.BASE_URL || '/';
  const imagePath = `${basePath}images/blog/village-model-cover.png`.replace(/\/+/g, '/');

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      position: 'relative',
      fontFamily: '"Cormorant Garamond", "Crimson Pro", Georgia, serif',
      overflow: 'auto',
      backgroundColor: '#1a1a1a' // Solid background to prevent transparency
    }}>
      
      {/* Background Image - full width, no cropping, starts at top */}
      <div style={{
        position: 'fixed',
        top: 0, // Start at the very top of the page
        left: 0,
        right: 0,
        width: '100%',
        height: '100vh', // Full viewport height
        backgroundImage: `url(${imagePath})`,
        backgroundSize: '100% auto', // Full width, maintain aspect ratio
        backgroundPosition: 'top center', // Align to top, center horizontally
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a', // Solid fallback color
        zIndex: 0,
        opacity: 1,
        filter: 'none' // Ensure no transparency filters
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        minHeight: '100vh',
        padding: '40px 20px'
      }}>
        
        {/* Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '400',
            color: '#fff8dc', /* Baby yellow/cream */
            marginBottom: '10px',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5), 2px 2px 8px rgba(0,0,0,0.6)'
          }}>
            The Village Model
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#fffef5', /* Soft white */
            fontStyle: 'italic',
            textShadow: '0 0 15px rgba(255,255,255,0.9), 1px 1px 5px rgba(0,0,0,0.5)'
          }}>
            A Metaphor for Social and Emotional Development
          </p>
        </div>

        {/* Main Map Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          minHeight: '900px',
          zIndex: 2
        }}>

          {/* Center - Village Model - aligned with glowing houses (center-left) */}
          <MapLocation
            title="The Child's Village"
            subtitle="Village Model"
            x="42%"
            y="500px"
            size="large"
            glow="warm"
            onClick={() => setSelectedNode('Village Model')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Village Model'}
          />

          {/* Top - Emotional Regulation - aligned with river (upper center to lower right) */}
          <MapLocation
            title="The Heartstream River"
            subtitle="Emotional Regulation"
            x="55%"
            y="180px"
            size="medium"
            glow="cool"
            onClick={() => setSelectedNode('Emotional Regulation')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Emotional Regulation'}
          />

          {/* Right - Identity Development - aligned with lighter meadow areas */}
          <MapLocation
            title="The Mirror Meadow"
            subtitle="Identity Development"
            x="75%"
            y="420px"
            size="medium"
            glow="golden"
            onClick={() => setSelectedNode('Identity Development')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Identity Development'}
          />

          {/* Bottom - Peer Relationships - aligned with circular paths around village */}
          <MapLocation
            title="The Gathering Square"
            subtitle="Peer Relationships"
            x="45%"
            y="750px"
            size="medium"
            glow="warm"
            onClick={() => setSelectedNode('Peer Relationships')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Peer Relationships'}
          />

          {/* Left - Moral Development - aligned with darker forested area */}
          <MapLocation
            title="The Council Grove"
            subtitle="Moral Development"
            x="20%"
            y="450px"
            size="medium"
            glow="forest"
            onClick={() => setSelectedNode('Moral Development')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Moral Development'}
          />

          {/* Risk Factors - Dark Woods/Shadows - positioned in darker areas */}
          <RiskLabel title="Emotional Fragility" x="30%" y="140px" />
          <RiskLabel title="Identity Confusion" x="80%" y="280px" />
          <RiskLabel title="Technology Overexposure" x="88%" y="480px" />
          <RiskLabel title="Comparison Culture" x="70%" y="780px" />
          <RiskLabel title="Loss of Meaning" x="30%" y="780px" />
          <RiskLabel title="Loss of Community" x="10%" y="420px" />

          {/* Protective Factors - Light/Safe Havens - positioned near glowing/light areas */}
          <ProtectiveLabel
            title="Consistency Across Contexts"
            short="Consistency"
            x="60%" y="120px"
            onClick={() => setSelectedNode('Consistency')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Consistency'}
          />
          <ProtectiveLabel
            title="Shared Identity & Belonging"
            short="Shared Identity"
            x="45%" y="480px"
            onClick={() => setSelectedNode('Shared Identity')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Shared Identity'}
          />
          <ProtectiveLabel
            title="Emotional Buffering & Co-Regulation"
            short="Co-Regulation"
            x="65%" y="350px"
            onClick={() => setSelectedNode('Co-Regulation')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Co-Regulation'}
          />
          <ProtectiveLabel
            title="Peer-Based Learning"
            short="Peer Learning"
            x="48%" y="800px"
            onClick={() => setSelectedNode('Peer Learning')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Peer Learning'}
          />
          <ProtectiveLabel
            title="Collective Advice & Wisdom"
            short="Collective Wisdom"
            x="15%" y="350px"
            onClick={() => setSelectedNode('Collective Wisdom')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Collective Wisdom'}
          />
          <ProtectiveLabel
            title="Recognition of Individual Strengths"
            short="Individual Strengths"
            x="40%" y="520px"
            onClick={() => setSelectedNode('Individual Strengths')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Individual Strengths'}
          />

        </div>

        {/* Cultural Variation Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '80px auto 60px',
          padding: '30px',
          background: 'rgba(20, 30, 40, 0.95)',
          borderRadius: '15px',
          border: '2px solid rgba(255, 215, 120, 0.3)',
          boxShadow: '0 0 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,215,120,0.1)',
          position: 'relative',
          zIndex: 3
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#ffd778',
            marginBottom: '25px',
            textAlign: 'center',
            fontWeight: '400',
            letterSpacing: '1px',
            textShadow: '0 0 10px rgba(255,215,120,0.6)'
          }}>
            Cultural Variation: The WEIRD Problem
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            <CultureCard
              country="Palestine"
              abbreviation="PS"
              flag="🇵🇸"
              insight="Collective identity and spirituality support resilience during hardship."
            />
            <CultureCard
              country="Japan"
              abbreviation="JP"
              flag="🇯🇵"
              insight="Social capital and family-centered norms strengthen emotional outcomes."
            />
            <CultureCard
              country="South Korea"
              abbreviation="KR"
              flag="🇰🇷"
              insight="Father's warmth predicts better self-control in children."
            />
            <CultureCard
              country="Mexico"
              abbreviation="MX"
              flag="🇲🇽"
              insight="Acculturative stress disrupts alignment between home and school, creating dual identity."
            />
          </div>
        </div>

        {/* Application Boxes */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '25px',
          position: 'relative',
          zIndex: 3
        }}>
          <ApplicationBox
            title="For Me"
            icon="🌱"
            insight="Recognize how my own development was shaped by village-like support (or its absence)."
          />
          <ApplicationBox
            title="For Parents"
            icon="🏡"
            insight="Build consistency across home, school, and community to create a supportive village."
          />
          <ApplicationBox
            title="For Policymakers & Educators"
            icon="🎓"
            insight="Design programs that strengthen community ties and align developmental contexts."
          />
        </div>

      </div>

      {/* Modal for Definitions */}
      {selectedNode && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          backdropFilter: 'blur(5px)'
        }} onClick={closeModal}>
          <div style={{
            background: 'linear-gradient(135deg, #2a3a4a 0%, #1a2a3a 100%)',
            padding: '40px',
            borderRadius: '15px',
            maxWidth: '650px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 0 50px rgba(255,215,120,0.3), 0 20px 60px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255, 215, 120, 0.4)'
          }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                cursor: 'pointer',
                padding: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <X size={24} color="#ffd778" />
            </button>
            <h3 style={{
              fontSize: '2rem',
              color: '#ffd778',
              marginBottom: '20px',
              fontWeight: '400',
              letterSpacing: '0.5px',
              textShadow: '0 0 10px rgba(255,215,120,0.5)'
            }}>
              {definitions[selectedNode]?.title}
            </h3>
            <p style={{
              fontSize: '1.15rem',
              color: '#e8e8e8',
              lineHeight: '1.8',
              marginBottom: '15px'
            }}>
              {definitions[selectedNode]?.definition}
            </p>
            {definitions[selectedNode]?.citation && (
              <p style={{
                fontSize: '0.95rem',
                color: '#b8c5d0',
                fontStyle: 'italic',
                marginTop: '20px',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255,215,120,0.2)'
              }}>
                <strong>Source:</strong> {definitions[selectedNode]?.citation}
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

// Map Location Component (for main nodes)
interface MapLocationProps {
  title: string;
  subtitle: string;
  x: string;
  y: string;
  size: 'large' | 'medium';
  glow: 'warm' | 'cool' | 'golden' | 'forest';
  onClick: () => void;
  onHover: (node: string | null) => void;
  isHovered: boolean;
}

const MapLocation: React.FC<MapLocationProps> = ({ title, subtitle, x, y, size, glow, onClick, onHover, isHovered }) => {
  const glowColors = {
    warm: 'rgba(255, 200, 100, 0.8)',
    cool: 'rgba(150, 200, 255, 0.8)',
    golden: 'rgba(255, 215, 120, 0.8)',
    forest: 'rgba(120, 180, 100, 0.8)'
  };

  const sizes = {
    large: { width: '220px', fontSize: '1.4rem', subtitleSize: '1rem' },
    medium: { width: '180px', fontSize: '1.1rem', subtitleSize: '0.85rem' }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onHover(subtitle)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        width: sizes[size].width,
        padding: '20px',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        textAlign: 'center',
        filter: isHovered ? 'brightness(1.3)' : 'brightness(1)',
        animation: isHovered ? 'pulse 1.5s infinite' : 'none'
      }}
    >
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle, ${glowColors[glow]} 0%, transparent 70%)`,
        opacity: isHovered ? 0.9 : 0.6,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        filter: 'blur(15px)'
      }} />
      
      <h3 style={{
        position: 'relative',
        fontSize: sizes[size].fontSize,
        fontWeight: '400',
        color: '#ffffff',
        marginBottom: '8px',
        textShadow: `0 0 20px ${glowColors[glow]}, 0 0 40px ${glowColors[glow]}, 2px 2px 6px rgba(0,0,0,0.8)`,
        letterSpacing: '0.5px',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>
      <p style={{
        position: 'relative',
        fontSize: sizes[size].subtitleSize,
        color: '#e8e8e8',
        fontStyle: 'italic',
        textShadow: '0 0 10px rgba(255,255,255,0.5), 1px 1px 4px rgba(0,0,0,0.9)'
      }}>
        {subtitle}
      </p>
      {/* Cursor indicator */}
      <div style={{
        position: 'relative',
        marginTop: '8px',
        fontSize: '1.2rem',
        opacity: isHovered ? 1 : 0.7,
        transition: 'opacity 0.3s ease'
      }}>
        ✦
      </div>
    </div>
  );
};

// Risk Label Component
interface RiskLabelProps {
  title: string;
  x: string;
  y: string;
}

const RiskLabel: React.FC<RiskLabelProps> = ({ title, x, y }) => (
  <div style={{
    position: 'absolute',
    left: x,
    top: y,
    transform: 'translate(-50%, -50%)',
    padding: '8px 14px',
    background: 'rgba(80, 40, 40, 0.7)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(150, 80, 80, 0.5)',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#ffb8b8',
    textAlign: 'center',
    maxWidth: '130px',
    lineHeight: '1.2',
    textShadow: '0 0 8px rgba(255,100,100,0.5), 1px 1px 3px rgba(0,0,0,0.8)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.4)'
  }}>
    ⚠️ {title}
  </div>
);

// Protective Label Component
interface ProtectiveLabelProps {
  title: string;
  short: string;
  x: string;
  y: string;
  onClick: () => void;
  onHover: (node: string | null) => void;
  isHovered: boolean;
}

const ProtectiveLabel: React.FC<ProtectiveLabelProps> = ({ title, short, x, y, onClick, onHover, isHovered }) => (
  <div
    onClick={onClick}
    onMouseEnter={() => onHover(short)}
    onMouseLeave={() => onHover(null)}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: 'translate(-50%, -50%)',
      padding: '10px 16px',
      background: 'rgba(60, 80, 70, 0.75)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(120, 180, 140, 0.6)',
      borderRadius: '8px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#c8ffdc',
      textAlign: 'center',
      cursor: 'pointer',
      maxWidth: '130px',
      lineHeight: '1.2',
      transition: 'all 0.3s ease',
      textShadow: '0 0 8px rgba(120,255,150,0.5), 1px 1px 3px rgba(0,0,0,0.8)',
      boxShadow: isHovered ? '0 4px 15px rgba(120,180,140,0.4)' : '0 2px 10px rgba(0,0,0,0.4)',
      filter: isHovered ? 'brightness(1.3)' : 'brightness(1)'
    }}
  >
    <div style={{ marginBottom: '4px' }}>✓ {title}</div>
    <div style={{
      fontSize: '1rem',
      opacity: isHovered ? 1 : 0.7,
      transition: 'opacity 0.3s ease'
    }}>
      ✦
    </div>
  </div>
);

// Culture Card
interface CultureCardProps {
  country: string;
  abbreviation: string;
  flag: string;
  insight: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ country, abbreviation, flag, insight }) => (
  <div style={{
    padding: '20px',
    background: 'rgba(30, 40, 50, 0.7)',
    backdropFilter: 'blur(8px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 215, 120, 0.3)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  }}>
    <div style={{ 
      fontSize: '0.9rem', 
      textAlign: 'center', 
      marginBottom: '8px',
      color: '#ffd778', /* Golden yellow to match theme */
      fontWeight: '600',
      letterSpacing: '2px',
      opacity: 0.8
    }}>
      {abbreviation}
    </div>
    <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>{flag}</div>
    <h4 style={{
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#ffd778',
      textAlign: 'center',
      marginBottom: '12px',
      textShadow: '0 0 8px rgba(255,215,120,0.4)'
    }}>
      {country}
    </h4>
    <p style={{
      fontSize: '0.95rem',
      color: '#d8d8d8',
      lineHeight: '1.6',
      textAlign: 'center'
    }}>
      {insight}
    </p>
  </div>
);

// Application Box
interface ApplicationBoxProps {
  title: string;
  icon: string;
  insight: string;
}

const ApplicationBox: React.FC<ApplicationBoxProps> = ({ title, icon, insight }) => (
  <div style={{
    padding: '25px',
    background: 'rgba(40, 50, 60, 0.75)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '2px solid rgba(120, 180, 140, 0.4)',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
  }}>
    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{icon}</div>
    <h4 style={{
      fontSize: '1.3rem',
      fontWeight: '500',
      color: '#c8ffdc',
      marginBottom: '12px',
      textShadow: '0 0 8px rgba(120,255,150,0.4)'
    }}>
      {title}
    </h4>
    <p style={{
      fontSize: '1rem',
      color: '#d8d8d8',
      lineHeight: '1.6'
    }}>
      {insight}
    </p>
  </div>
);

export default EnchantedValleyMap;

