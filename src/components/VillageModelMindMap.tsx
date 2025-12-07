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
      citation: 'Personal synthesis drawing on Bronfenbrenner\'s ecological systems theory (1979) and Rogoff\'s cultural learning framework (2003)'
    },
    'Emotional Regulation': {
      title: 'Emotional Regulation Socialization',
      definition: 'Processes through which children learn how to monitor, express, and modify their emotional reactions. Parents, teachers, peers, and cultural norms shape children\'s strategies for regulating emotions.',
      citation: 'Morris et al., as cited in Parke et al., textbook'
    },
    'Identity Development': {
      title: 'Identity Development',
      definition: 'How children and adolescents form a stable sense of self, including personal values, cultural identity, gender identity, and their roles within the community.',
      citation: 'Erikson, as cited in Parke et al., textbook'
    },
    'Peer Relationships': {
      title: 'Peer Relationships',
      definition: 'The social interactions, friendships, and group dynamics that influence children\'s social skills, emotional development, and sense of belonging.',
      citation: 'Rubin et al., as cited in Parke et al., textbook'
    },
    'Moral Development': {
      title: 'Moral Development',
      definition: 'The gradual internalization of societal values, norms, and ethical principles that guide judgments of right and wrong.',
      citation: 'Turiel (2002)'
    },
    'Consistency': {
      title: 'Consistency Across Contexts',
      definition: 'When expectations, values, and behavioral norms at home, school, and community are aligned, reducing confusion and strengthening resilience.',
      citation: 'Inspired by Calzada et al. (2019); Causadias et al. (2018)'
    },
    'Shared Identity': {
      title: 'Shared Identity and Belonging',
      definition: 'A collective sense of purpose and membership that supports emotional well-being, empathy, and motivation.',
      citation: 'Inspired by Harazneh et al. (2021); Barcaccia et al. (2023)'
    },
    'Co-Regulation': {
      title: 'Emotional Buffering & Co-Regulation',
      definition: 'Support from adults and peers during emotional distress, teaching children healthy regulation strategies.',
      citation: 'Hrdy (2009); Kramer & Kim (2019)'
    },
    'Peer Learning': {
      title: 'Peer-Based Learning',
      definition: 'Peers modeling behavior, coping, moral choices, and social skills in ways that are often more influential than adult instruction.',
      citation: ''
    },
    'Collective Wisdom': {
      title: 'Collective Advice & Wisdom',
      definition: 'Shared cultural knowledge and guidance from multiple generations that provides children with diverse perspectives and problem-solving strategies.',
      citation: 'Inspired by Hrdy (2009); Kramer & Kim (2019)'
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
      fontFamily: '"Cormorant Garamond", "Crimson Pro", Georgia, serif',
      background: 'transparent'
    }}>
      
      {/* ═══════════════════════════════════════════════════════════
          TITLE SECTION - SEPARATE FROM DIAGRAM
          ═══════════════════════════════════════════════════════════ */}
      <div style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '400',
          color: '#fff8dc', /* Baby yellow/cream */
          margin: '0 0 10px 0',
          letterSpacing: '2px',
          textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5), 2px 2px 8px rgba(0,0,0,0.6)'
        }}>
          The Village Model
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#fffef5', /* Soft white */
          fontStyle: 'italic',
          margin: 0,
          textShadow: '0 0 15px rgba(255,255,255,0.9), 1px 1px 5px rgba(0,0,0,0.5)'
        }}>
          An Interactive Metaphor for Social and Emotional Development
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          LEGEND - ABOVE DIAGRAM FOR CONTEXT
          ═══════════════════════════════════════════════════════════ */}
      <div style={{
        maxWidth: '1400px',
        margin: '40px auto 20px',
        padding: '24px',
        background: 'rgba(20, 30, 40, 0.85)',
        borderRadius: '12px',
        border: '2px solid rgba(255,215,120,0.5)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 3
      }}>
        <h4 style={{
          color: '#ffd778',
          fontSize: '1.1rem',
          marginBottom: '20px',
          fontWeight: '600',
          textAlign: 'center',
          textShadow: '0 0 8px rgba(255,215,120,0.4)'
        }}>
          Legend
        </h4>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {/* Main Domains */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            background: 'rgba(40,50,60,0.6)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(20, 30, 40, 0.9)',
              border: '2px solid rgba(255,200,100,0.8)',
              marginRight: '12px',
              flexShrink: 0
            }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px' }}>
                Developmental Domains
              </div>
              <div style={{ color: '#bbb', fontSize: '0.75rem' }}>
                Core areas of growth
              </div>
            </div>
          </div>

          {/* Protective Factors */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            background: 'rgba(40,50,60,0.6)',
            borderRadius: '8px'
          }}>
            <div style={{
              padding: '8px 12px',
              background: 'rgba(50, 90, 70, 0.8)',
              border: '2px solid rgba(120,200,140,0.7)',
              borderRadius: '6px',
              color: '#c8ffdc',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginRight: '12px',
              flexShrink: 0
            }}>
              ✓
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px' }}>
                Protective Factors
              </div>
              <div style={{ color: '#bbb', fontSize: '0.75rem' }}>
                Village supports
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            background: 'rgba(40,50,60,0.6)',
            borderRadius: '8px'
          }}>
            <div style={{
              padding: '8px 12px',
              background: 'rgba(80, 40, 40, 0.7)',
              border: '2px solid rgba(180,80,80,0.7)',
              borderRadius: '6px',
              color: '#ffb8b8',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginRight: '12px',
              flexShrink: 0
            }}>
              ⚠️
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px' }}>
                Risk Factors
              </div>
              <div style={{ color: '#bbb', fontSize: '0.75rem' }}>
                Modern challenges
              </div>
            </div>
          </div>

          {/* Connections */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px',
            background: 'rgba(40,50,60,0.6)',
            borderRadius: '8px'
          }}>
            <svg width="50" height="20" style={{ marginRight: '12px', flexShrink: 0 }}>
              <line x1="0" y1="10" x2="50" y2="10" 
                    stroke="rgba(255,215,120,0.6)" 
                    strokeWidth="2" 
                    strokeDasharray="5,5" />
            </svg>
            <div>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px' }}>
                Connections
              </div>
              <div style={{ color: '#bbb', fontSize: '0.75rem' }}>
                Interdependent relationships
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DIAGRAM CONTAINER - BACKGROUND + ELEMENTS TOGETHER
          THIS IS THE CRITICAL PART!
          ═══════════════════════════════════════════════════════════ */}
      <div style={{
        position: 'relative',           // ← MUST BE RELATIVE
        width: '100%',                   
        height: '1200px',                // ← FIXED HEIGHT
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        overflow: 'visible',             // ← Allow elements to be visible
        backgroundColor: 'transparent'
        // NO position: fixed!
        // NO position: absolute!
        // NO backgroundAttachment!
      }}>

        {/* ─────────────────────────────────────────────────────────
            SVG LINES - BEHIND EVERYTHING
            ───────────────────────────────────────────────────────── */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10 // Behind all boxes, in front of background
          }}
        >
            {/* Lines from The Child's Village to main domains - exact center coordinates */}
            {/* To Heartstream River (top) - center to center */}
            <line
              x1="50%"
              y1="500"
              x2="50%"
              y2="240"
              stroke="rgba(255, 215, 120, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* To Mirror Meadow (right) - center to center */}
            <line
              x1="50%"
              y1="500"
              x2="75%"
              y2="420"
              stroke="rgba(255, 215, 120, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* To Gathering Square (bottom) - center to center */}
            <line
              x1="50%"
              y1="500"
              x2="50%"
              y2="760"
              stroke="rgba(255, 215, 120, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* To Council Grove (left) - center to center */}
            <line
              x1="50%"
              y1="500"
              x2="25%"
              y2="420"
              stroke="rgba(255, 215, 120, 0.4)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Lines from domains to protective factors - center to center */}
            {/* Heartstream River to Consistency */}
            <line
              x1="50%"
              y1="240"
              x2="68%"
              y2="140"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Mirror Meadow to Shared Identity */}
            <line
              x1="75%"
              y1="420"
              x2="93%"
              y2="330"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            {/* Mirror Meadow to Co-Regulation */}
            <line
              x1="75%"
              y1="420"
              x2="93%"
              y2="560"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Council Grove to Collective Wisdom */}
            <line
              x1="25%"
              y1="420"
              x2="9%"
              y2="360"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            {/* Council Grove to Individual Strengths */}
            <line
              x1="25%"
              y1="420"
              x2="9%"
              y2="570"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Gathering Square to Peer Learning */}
            <line
              x1="50%"
              y1="760"
              x2="50%"
              y2="920"
              stroke="rgba(120, 255, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Visual cluster indicators for each domain cluster - updated positions */}
            {/* Heartstream River cluster (top) - cool blue */}
            <circle
              cx="50%"
              cy="240px"
              r="120"
              fill="none"
              stroke="rgba(150, 200, 255, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="8,8"
            />
            
            {/* Mirror Meadow cluster (right) - golden */}
            <circle
              cx="75%"
              cy="420px"
              r="120"
              fill="none"
              stroke="rgba(255, 215, 120, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="8,8"
            />
            
            {/* Council Grove cluster (left) - forest green */}
            <circle
              cx="25%"
              cy="420px"
              r="120"
              fill="none"
              stroke="rgba(120, 180, 100, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="8,8"
            />
            
            {/* Gathering Square cluster (bottom) - warm */}
            <circle
              cx="50%"
              cy="760px"
              r="120"
              fill="none"
              stroke="rgba(255, 200, 100, 0.25)"
              strokeWidth="1.5"
              strokeDasharray="8,8"
            />
            
            {/* Lines from domains to risk factors - updated positions */}
            {/* Heartstream River to Emotional Fragility */}
            <line
              x1="50%"
              y1="240"
              x2="32%"
              y2="140"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Mirror Meadow to Identity Confusion */}
            <line
              x1="75%"
              y1="420"
              x2="89%"
              y2="245"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            {/* Mirror Meadow to Technology Overexposure */}
            <line
              x1="75%"
              y1="420"
              x2="88%"
              y2="820"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />

            {/* Council Grove to Loss of Community */}
            <line
              x1="25%"
              y1="420"
              x2="11%"
              y2="245"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />

            {/* Gathering Square to Loss of Meaning and Comparison Culture */}
            <line
              x1="50%"
              y1="760"
              x2="28%"
              y2="890"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            <line
              x1="50%"
              y1="760"
              x2="72%"
              y2="890"
              stroke="rgba(255, 150, 150, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            
            {/* Glow filter definition */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* CENTER - The Child's Village */}
          <MapLocation
            title="The Child's Village"
            subtitle="Village Model"
            x="50%"
            y="500px"
            size="large"
            glow="cool"
            onClick={() => setSelectedNode('Village Model')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Village Model'}
          />

          {/* MAIN DOMAINS - Exact positions as specified */}
          {/* Top - Emotional Regulation */}
          <MapLocation
            title="The Heartstream River"
            subtitle="Emotional Regulation"
            x="50%"
            y="240px"
            size="medium"
            glow="golden"
            onClick={() => setSelectedNode('Emotional Regulation')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Emotional Regulation'}
          />

          {/* Right - Identity Development */}
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

          {/* Bottom - Peer Relationships */}
          <MapLocation
            title="The Gathering Square"
            subtitle="Peer Relationships"
            x="50%"
            y="760px"
            size="medium"
            glow="golden"
            onClick={() => setSelectedNode('Peer Relationships')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Peer Relationships'}
          />

          {/* Left - Moral Development */}
          <MapLocation
            title="The Council Grove"
            subtitle="Moral Development"
            x="25%"
            y="420px"
            size="medium"
            glow="golden"
            onClick={() => setSelectedNode('Moral Development')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Moral Development'}
          />

          {/* PROTECTIVE FACTORS - Exact positions as specified */}
          {/* TOP CLUSTER - Heartstream River */}
          <ProtectiveLabel
            title="Consistency Across Contexts"
            short="Consistency"
            x="68%" y="140px"
            onClick={() => setSelectedNode('Consistency')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Consistency'}
          />
          
          {/* RIGHT CLUSTER - Mirror Meadow - increased spacing */}
          <ProtectiveLabel
            title="Shared Identity & Belonging"
            short="Shared Identity"
            x="93%" y="330px"
            onClick={() => setSelectedNode('Shared Identity')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Shared Identity'}
          />
          <ProtectiveLabel
            title="Emotional Buffering & Co-Regulation"
            short="Co-Regulation"
            x="93%" y="560px"
            onClick={() => setSelectedNode('Co-Regulation')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Co-Regulation'}
          />
          
          {/* LEFT CLUSTER - Council Grove - maximum spacing to prevent overlap */}
          <ProtectiveLabel
            title="Collective Advice & Wisdom"
            short="Collective Wisdom"
            x="9%" y="360px"
            onClick={() => setSelectedNode('Collective Wisdom')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Collective Wisdom'}
          />
          <ProtectiveLabel
            title="Recognition of Individual Strengths"
            short="Individual Strengths"
            x="9%" y="570px"
            onClick={() => setSelectedNode('Individual Strengths')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Individual Strengths'}
          />
          
          {/* BOTTOM CLUSTER - Gathering Square */}
          <ProtectiveLabel
            title="Peer-Based Learning"
            short="Peer Learning"
            x="50%" y="920px"
            onClick={() => setSelectedNode('Peer Learning')}
            onHover={setHoveredNode}
            isHovered={hoveredNode === 'Peer Learning'}
          />

          {/* RISK FACTORS - Exact positions as specified */}
          {/* TOP CLUSTER - Heartstream River */}
          <RiskLabel title="Emotional Fragility" x="32%" y="140px" />

          {/* RIGHT CLUSTER - Mirror Meadow */}
          <RiskLabel title="Identity Confusion" x="89%" y="245px" />
          <RiskLabel title="Technology Overexposure" x="88%" y="820px" />

          {/* BOTTOM CLUSTER - Gathering Square */}
          <RiskLabel title="Loss of Meaning" x="28%" y="890px" />
          <RiskLabel title="Comparison Culture" x="72%" y="890px" />

          {/* LEFT CLUSTER - Council Grove */}
          <RiskLabel title="Loss of Community" x="11%" y="245px" />

      </div>
      {/* ═══════════════════════════════════════════════════════════
          END OF DIAGRAM CONTAINER
          ═══════════════════════════════════════════════════════════ */}

      {/* ═══════════════════════════════════════════════════════════
          CULTURAL SECTION - SCROLLS BELOW DIAGRAM
          ═══════════════════════════════════════════════════════════ */}
      <div style={{
        maxWidth: '1400px',
        margin: '80px auto 60px',
        padding: '30px',
        background: 'transparent',
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
            abbreviation="🇵🇸"
            flag={`${basePath}images/blog/palestine.png`.replace(/\/+/g, '/')}
            insight="Collective identity and spirituality support resilience during hardship."
          />
          <CultureCard
            country="Japan"
            abbreviation="🇯🇵"
            flag={`${basePath}images/blog/japan.png`.replace(/\/+/g, '/')}
            insight="Social capital and family-centered norms strengthen emotional outcomes."
          />
          <CultureCard
            country="South Korea"
            abbreviation="🇰🇷"
            flag={`${basePath}images/blog/south-korea.png`.replace(/\/+/g, '/')}
            insight="Father's warmth predicts better self-control in children."
          />
          <CultureCard
            country="Mexico"
            abbreviation="🇲🇽"
            flag={`${basePath}images/blog/mexico.png`.replace(/\/+/g, '/')}
            insight="Acculturative stress disrupts alignment between home and school, creating dual identity."
          />
        </div>
      </div>

      {/* Application Boxes - scrolls below cultural section */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 60px',
        padding: '40px 20px',
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

      {/* Modal for Definitions */}
      {selectedNode && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
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
    large: { width: '240px', height: '240px', fontSize: '1.5rem', subtitleSize: '1.1rem' }, // Perfect circle, slightly larger
    medium: { width: '200px', height: '200px', fontSize: '1.2rem', subtitleSize: '0.9rem' } // Perfect circle
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
        height: sizes[size].height, // Equal width and height for perfect circle
        minWidth: sizes[size].width, // Ensure minimum size
        minHeight: sizes[size].height, // Ensure minimum size
        maxWidth: sizes[size].width, // Ensure maximum size
        maxHeight: sizes[size].height, // Ensure maximum size
        padding: '20px',
        boxSizing: 'border-box', // Include padding in width/height
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        textAlign: 'center',
        filter: isHovered ? 'brightness(1.3)' : 'brightness(1)',
        animation: isHovered ? 'pulse 1.5s infinite' : 'none',
        background: 'rgba(20, 30, 40, 0.9)', // More opaque to cover lines
        borderRadius: '50%', // Perfect circle - MUST be 50%
        overflow: 'hidden', // Clip content to circle
        backdropFilter: 'blur(10px)',
        border: `2px solid ${glowColors[glow]}60`, // Stronger border
        boxShadow: `0 4px 20px rgba(0,0,0,0.6), 0 0 40px ${glowColors[glow]}40`, // Stronger shadow
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100 // Above all lines and small boxes
      }}
    >
      {/* Glow effect - circular */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        background: `radial-gradient(circle, ${glowColors[glow]} 0%, transparent 70%)`,
        opacity: isHovered ? 0.9 : 0.7, // Slightly brighter default
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
        filter: 'blur(15px)',
        borderRadius: '50%', // Always circular for glow
        overflow: 'hidden', // Ensure circular clipping
        zIndex: -1
      }} />
      
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        marginTop: '-10px' // Fine-tune vertical centering
      }}>
        <h3 style={{
          fontSize: sizes[size].fontSize,
          fontWeight: '500',
          color: '#ffffff',
          marginBottom: '4px',
          marginTop: 0,
          textShadow: `0 0 25px ${glowColors[glow]}, 0 0 50px ${glowColors[glow]}, 2px 2px 8px rgba(0,0,0,0.8)`,
          letterSpacing: '0.5px',
          lineHeight: '1.2',
          textAlign: 'center'
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: sizes[size].subtitleSize,
          color: '#f0f0f0',
          fontStyle: 'italic',
          margin: 0,
          textShadow: '0 0 10px rgba(255,255,255,0.5), 1px 1px 4px rgba(0,0,0,0.9)',
          textAlign: 'center'
        }}>
          {subtitle}
        </p>
      </div>
      {/* Cursor indicator - positioned absolutely at bottom */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '1.2rem',
        opacity: isHovered ? 1 : 0.7,
        transition: 'opacity 0.3s ease',
        zIndex: 1
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
    boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
    zIndex: 50 // Above lines, below main circles
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
      padding: '12px 18px', // Slightly larger padding
      background: 'rgba(50, 90, 70, 0.8)', // Lighter, brighter
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(140, 200, 160, 0.7)', // Brighter border
      borderRadius: '8px',
      fontSize: '0.8rem', // Slightly larger than risk factors
      fontWeight: '600',
      color: '#d8ffe8', // Lighter, brighter green
      textAlign: 'center',
      cursor: 'pointer',
      maxWidth: '140px', // Slightly wider than risk factors
      lineHeight: '1.2',
      transition: 'all 0.3s ease',
      textShadow: '0 0 10px rgba(140,255,180,0.6), 1px 1px 3px rgba(0,0,0,0.8)',
      boxShadow: isHovered ? '0 4px 15px rgba(120,180,140,0.5)' : '0 2px 10px rgba(0,0,0,0.4)',
      filter: isHovered ? 'brightness(1.3)' : 'brightness(1.1)', // Slightly brighter by default
      zIndex: 50 // Above lines, below main circles
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
    background: 'transparent',
    backdropFilter: 'blur(8px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 215, 120, 0.3)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '12px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={flag}
        alt={`${country} flag`}
        style={{
          maxWidth: '80px',
          maxHeight: '60px',
          objectFit: 'contain'
        }}
      />
    </div>
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
    background: 'transparent',
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

