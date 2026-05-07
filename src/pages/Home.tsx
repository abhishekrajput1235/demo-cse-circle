

import {
  Users, BookOpen, FileText, UserCheck,
  TrendingUp, Award
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { features, testimonials } from '../data/data';
import AirRankAchievers from '../components/AirRankAchievers';
import WhyTrustUsSection from '../components/WhyTrustUsSection';
import TeachingApproachSection from '../components/TeachingApproachSection';
import LeftRightSection from '../components/LeftRightSection';
import FinalCtaSection from '../components/FinalCtaSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyTheCseCircleSection from '../components/WhyTheCseCircleSection';
import TrustStatsSection from '../components/TrustStatsSection';
import pyqImg from '../assets/pyqImg.png'
import WhyImg from '../assets/bg7.jpg'

import largeDevicebanner from '../assets/1.-Website-slider-banner-2-10.webp'
import mobileDevicebanner from '../assets/2-WEBSITE-9-1.webp'
import banner1 from '../assets/banner1.jpg'


import ResponsiveBanner from '../components/ResponsiveBanner';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ResourcesAndCTASection from '../components/ResourcesAndCTASection';

// ─── IMAGE CONSTANTS ──────────────────────────────────────────────────────
const IMG = {
  hero:          'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teachingMaths: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=900',
  teachingSocio: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  answerWrite:   'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
  mentoring:     'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
  studyDesk:     'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
  library:       'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
  classSession:  'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200',
  mathsTeacher:  'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
  socioTeacher:  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  pyq:           pyqImg,
  evaluation:    'https://images.pexels.com/photos/4145154/pexels-photo-4145154.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export default function Home() {
  const stats = [
    { icon: Users,      value: '5,000+', label: 'Students Taught Personally'    },
    { icon: Award,      value: '500+',   label: 'Selections Guided by Teachers' },
    { icon: TrendingUp, value: '2',      label: 'Dedicated Expert Teachers'     },
    { icon: BookOpen,   value: '20+',    label: 'Years of PYQs Analysed'        },
  ];

  const iconMap: Record<string, LucideIcon> = {
    Users, BookOpen, FileText, UserCheck,
  };

  const teachingSteps = [
    { step: '01', title: 'PYQ First — Always',         desc: 'Every new topic begins with a real past-year question so you immediately understand why you are learning it and what the examiner expects.', img: IMG.pyq },
    { step: '02', title: 'Concept Before Content',     desc: 'No formula dumping. No rote definitions. The teacher builds understanding from first principles — so you can handle any question format.', img: IMG.teachingMaths },
    { step: '03', title: 'Answer Writing from Week 1', desc: 'Writing practice begins on the very first day. By exam day, structured answer writing is a habit — not a skill you are still developing.', img: IMG.answerWrite },
    { step: '04', title: 'Personal Written Feedback',  desc: 'Every answer you submit is read and annotated by the teacher personally — not a TA, not an automated system. Feedback tells you exactly what to fix.', img: IMG.evaluation },
    { step: '05', title: 'Student-Paced Depth',        desc: 'Teachers adapt to where you are, not where the timetable says. No student gets left behind because the class moved faster than their understanding.', img: IMG.mentoring },
    { step: '06', title: 'Contemporary Integration',   desc: 'Especially in Sociology — current events are woven into every class so your answers feel relevant, fresh, and examiner-worthy without a separate module.', img: IMG.teachingSocio },
  ];

  return (
    <div className="min-h-screen">

      <ResponsiveBanner
        desktopImage={[largeDevicebanner, banner1]}
        mobileImage={[mobileDevicebanner, banner1]}
        height="h-[50vh] md:h-[50vh]"
        overlay
      />

      <TrustStatsSection
        stats={stats.map((stat) => ({
          value: stat.value,
          label: stat.label,
          sub:
            stat.label === 'Students Taught Personally'
              ? 'Small batches with individual attention.'
              : stat.label === 'Selections Guided by Teachers'
                ? 'Personal feedback and exam-focused strategy.'
                : stat.label === 'Dedicated Expert Teachers'
                  ? 'One teacher for each optional subject.'
                  : 'Two decades of PYQ-driven preparation.',
        }))}
      />

      {/* ═══════════════════════════════════════════════════════════════
          WHY THE CSE CIRCLE
          Layout: wide image banner → feature cards
      ═══════════════════════════════════════════════════════════════ */}
      <WhyTheCseCircleSection
      />

        <WhyChooseUsSection/>

        <HowItWorksSection/>


      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — with image context
      ═══════════════════════════════════════════════════════════════ */}
      <TestimonialsSection  />


      <ResourcesAndCTASection />      
      <AirRankAchievers />


    </div>
  );
}