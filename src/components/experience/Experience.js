export const EXPERIENCE = [
  {
    company: 'GAMMA Lab',
    role: 'Autonomous Navigation Research Assistant',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://gamma.umd.edu/',
    bullets: [
      'Generated 3D point cloud maps from LiDAR, GPS, IMU, and camera sensor data using SLAM algorithms',
      'Filtered point clouds with RANSAC plane fitting to remove ground points and isolate obstacles',
      'Annotated processed maps according to traversability, creating a labeled and trainable dataset for autonomous navigation',
      'Published the first large-scale, long-range, cross-campus global navigation dataset with multi-modal perception data and multi-category traversability maps (2025 IEEE ICRA)',
    ],
    // notes: [
    //   'arxiv link when published',
    // ]
  },
  {
    company: 'Rajeev Barua Lab',
    role: 'Malware Analysis Research Intern',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://ece.umd.edu/clark/faculty/361/Rajeev-Barua',
    bullets: [
      'Dynamically analyze over 30 executables using Ghidra to understand the internal structure of x64 PE and COFF files',
      'Design a reverse engineering tool to extract code from encrypted binaries by reading instructions at runtime',
      'Reduce execution times by 90% by skipping non-branching instructions, circumventing evasive malware tactics',
    ],
  },
  {
    company: 'UMIACS',
    role: 'Undergraduate Research Assistant',
    start_date: 'Jan 2024',
    end_date: 'Mar 2024',
    location: 'College Park, MD',
    link: 'https://www.umiacs.umd.edu/',
    bullets: [
      'Designed a 3D convolutional neural network classification model to detect COVID-19 from volumetric CT scans',
      'Implemented a flexible architecture using ragged tensors to account for variable depth in CT scans',
      'Developed a data pipeline using data loaders to efficiently process a 70GB dataset with limited memory constraints',
      'Optimized accuracy through hyperparameter tuning to achieve an F1 score of 0.8235',
    ],
  },
  {
    company: 'Gamera-S',
    role: 'Electronics Team Member',
    start_date: 'Sep 2023',
    end_date: 'Dec 2023',
    location: 'College Park, MD',
    link: 'https://gamera.umd.edu/',
    bullets: [
      'Modeled a thrust stand to collect statistics about the helicopter’s flight by utilizing Arduino sensors',
      'Gained insight into the propellers’ performance by determining their drag and lift from a quadratic regression curve',
    ],
  },
  {
    company: 'Weis Markets',
    role: 'Deli Sales Associate',
    start_date: 'Jun 2023',
    end_date: 'Aug 2023',
    location: 'Woodstock, MD',
    link: 'https://www.weismarkets.com/',
    bullets: [
      'Provided excellent customer service to improve the shopping experience by being personable and knowledgeable',
      'Collaborated with coworkers to leverage specific individual strengths and efficiently allocate tasks, optimizing workflow and avoiding customer congestion',
    ],
  },
]
