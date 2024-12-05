export const EXPERIENCE = [
  {
    company: 'GAMMA Lab',
    role: 'Autonomous Navigation Research Intern',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://arxiv.org/abs/2409.14262',
    bullets: [
      'Constructed 3D point cloud maps from LiDAR, GPS, IMU, and camera sensor data using SLAM algorithms',
      'Reduced point cloud sizes by 95% by using RANSAC plane fitting to remove ground points and isolate obstacles',
      'Labeled a large-scale dataset for autonomous navigation by annotating processed maps according to traversability',
      'Published the first large-scale, long-range, cross-campus global navigation dataset with multi-modal perception data and multi-category traversability maps (2025 IEEE ICRA)',
    ],
  },
  {
    company: 'Rajeev Barua Lab',
    role: 'Software Engineer Intern',
    start_date: 'May 2024',
    location: 'College Park, MD',
    bullets: [
      'Statically analyzed over 30 executables using Ghidra to understand the structure of x64 PE and COFF files',
      'Designed a reverse engineering tool to extract code from encrypted binaries by reading instructions at runtime',
      'Optimized execution times by 90% by skipping non-branching instructions, circumventing evasive malware tactics',
    ],
  },
  {
    company: 'UMIACS',
    role: 'Undergraduate Research Intern',
    start_date: 'Jan 2024',
    end_date: 'Mar 2024',
    location: 'College Park, MD',
    link: 'https://www.umiacs.umd.edu/',
    bullets: [
      'Designed a 3D convolutional neural network classification model to detect COVID-19 from volumetric CT scans',
      'Implemented a flexible architecture using ragged tensors to account for varying depths in each batch',
      'Developed a data pipeline using data loaders to efficiently process a 70GB dataset with limited memory constraints',
      'Refined model accuracy through hyperparameter adjustments, achieving an F1 score of 0.8235',
    ],
  },
  {
    company: 'Weis Markets',
    role: 'Deli Sales Associate',
    start_date: 'Jun 2023',
    end_date: 'Jan 2024',
    location: 'Woodstock, MD',
    bullets: [
      'Provided excellent customer service to improve the shopping experience by being personable and knowledgeable',
      'Collaborated with coworkers to leverage specific individual strengths and efficiently allocate tasks, optimizing workflow and avoiding customer congestion',
    ],
  },
  {
    company: 'Gamera-S',
    role: 'Avionics Software Engineer',
    start_date: 'Sep 2023',
    end_date: 'Dec 2023',
    location: 'College Park, MD',
    link: 'https://gamera.umd.edu/',
    bullets: [
      'Programmed Arduino firmware to enable real-time data collection and processing for propeller analysis',
      'Gained insight into the propellers’ performance by determining their drag and lift with a quadratic regression curve',
    ],
  },
]
