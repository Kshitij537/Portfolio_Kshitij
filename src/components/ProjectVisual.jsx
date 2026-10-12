import React from "react";
import {
  FaArrowRight,
  FaBalanceScale,
  FaBell,
  FaBullhorn,
  FaFileAlt,
  FaLeaf,
  FaRobot,
} from "react-icons/fa";

const fieldColors = [
  "bg-[#3c6845]", "bg-[#6f8e4e]", "bg-[#8aa75b]", "bg-[#315a43]",
  "bg-[#859c55]", "bg-[#adad60]", "bg-[#4e784a]", "bg-[#709555]",
  "bg-[#285a48]", "bg-[#496d42]", "bg-[#bba963]", "bg-[#4c8052]",
];

const AgricultureVisual = () => (
  <div className='relative h-full overflow-hidden bg-[#10251e]'>
    <div className='absolute -left-10 -top-10 h-[130%] w-[72%] -rotate-12 border-[8px] border-[#142e24]'>
      <div className='grid h-full grid-cols-4 grid-rows-3 gap-[3px] bg-[#173b2e]'>
        {fieldColors.map((color, index) => (
          <div key={index} className={`${color} border border-white/10`} />
        ))}
      </div>
    </div>
    <div className='absolute left-4 top-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white sm:left-6 sm:top-6'>
      <FaLeaf className='text-[#c2e69f]' size={17} />
      Field view
    </div>
    <div className='absolute bottom-4 left-4 text-[11px] font-medium text-[#e0edce] sm:bottom-6 sm:left-6'>
      Satellite + field data
    </div>
    <div className='absolute inset-y-0 right-0 flex w-[45%] flex-col justify-center border-l border-[#9ac486]/30 bg-[#0a1a17]/95 px-4 sm:px-6'>
      <p className='text-[11px] font-semibold uppercase tracking-wider text-[#a9d594]'>AgriChain</p>
      <h4 className='mt-2 text-[17px] font-bold leading-tight text-white sm:text-[22px]'>Crop intelligence</h4>
      <div className='mt-5 space-y-3 text-[12px] text-[#d8e7d2] sm:text-[14px]'>
        {['NDVI analysis', 'Disease checks', 'Price forecasting'].map((label) => (
          <div key={label} className='flex items-start gap-2 border-t border-white/10 pt-3'>
            <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#badb8c]' />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LegalVisual = () => (
  <div className='flex h-full flex-col bg-[#13202b] p-4 sm:p-6'>
    <div className='flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#a9d9e2]'>
      <FaBalanceScale size={18} />
      NyaySathi / Case workflow
    </div>
    <div className='grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1 sm:gap-3'>
      {[
        { icon: FaFileAlt, title: 'Complaint', caption: 'Intake' },
        { icon: FaRobot, title: 'AI agents', caption: 'Analysis' },
        { icon: FaBalanceScale, title: 'Case action', caption: 'Resolution' },
      ].map((step, index) => (
        <React.Fragment key={step.title}>
          {index > 0 && <FaArrowRight className='text-[#67b6c7]' size={12} />}
          <div className='flex h-28 min-w-0 flex-col items-center justify-center rounded-md border border-[#6c9ca9]/35 bg-[#1b3040] px-1 text-center sm:h-36 sm:px-3'>
            <step.icon className='text-[#83d4d9]' size={22} />
            <span className='mt-3 text-[11px] font-bold leading-tight text-white sm:text-[15px]'>{step.title}</span>
            <span className='mt-1 text-[10px] text-[#a8c1ca] sm:text-[12px]'>{step.caption}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
    <div className='border-t border-white/10 pt-3 text-[11px] text-[#a8c1ca] sm:text-[13px]'>
      Prioritization / Staff assignment / Document generation
    </div>
  </div>
);

const MonitoringVisual = () => (
  <div className='relative h-full overflow-hidden bg-[#211d28] p-4 sm:p-6'>
    <div className='flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#f3c0ae]'>
      <FaBullhorn size={17} />
      Garudadrishti / Social signals
    </div>
    <div className='absolute left-[8%] top-1/2 aspect-square w-[42%] -translate-y-1/2 rounded-full border border-[#d98d79]/45'>
      <div className='absolute inset-[18%] rounded-full border border-[#d98d79]/35' />
      <div className='absolute inset-[36%] rounded-full border border-[#d98d79]/35' />
      <div className='absolute left-1/2 top-1/2 h-px w-[43%] origin-left -rotate-[25deg] bg-[#e9a58f]' />
      <div className='absolute left-[29%] top-[22%] h-2 w-2 rounded-full bg-[#e9a58f]' />
      <div className='absolute right-[18%] top-[31%] h-2.5 w-2.5 rounded-full bg-[#efc56d]' />
      <div className='absolute bottom-[23%] left-[35%] h-2 w-2 rounded-full bg-[#a5c8cb]' />
    </div>
    <div className='absolute right-4 top-1/2 w-[45%] -translate-y-1/2 border-l border-[#cf8c7e]/40 pl-4 sm:right-6 sm:pl-6'>
      <h4 className='text-[17px] font-bold leading-tight text-white sm:text-[22px]'>Content monitoring</h4>
      <div className='mt-4 space-y-3 text-[12px] text-[#e6d7d4] sm:text-[14px]'>
        <div className='border-t border-white/10 pt-3'>Collect public posts</div>
        <div className='border-t border-white/10 pt-3'>Classify with ML</div>
        <div className='flex items-center gap-2 border-t border-white/10 pt-3'>
          <FaBell className='shrink-0 text-[#efc56d]' size={13} />
          Review alerts
        </div>
      </div>
    </div>
  </div>
);

const visuals = {
  agriculture: {
    label: 'Conceptual field view showing crop monitoring, disease checks and price forecasting',
    Component: AgricultureVisual,
  },
  legal: {
    label: 'Conceptual legal complaint workflow from intake through AI analysis to case action',
    Component: LegalVisual,
  },
  monitoring: {
    label: 'Conceptual social media signal monitoring and review workflow',
    Component: MonitoringVisual,
  },
};

const ProjectVisual = ({ type }) => {
  const { label, Component } = visuals[type];

  return (
    <div
      role='img'
      aria-label={label}
      className='h-[260px] overflow-hidden rounded-lg border border-white/10 sm:h-[310px]'
    >
      <Component />
    </div>
  );
};

export default ProjectVisual;
