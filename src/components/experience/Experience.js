export const EXPERIENCE = [
  {
    company: 'GAMMA Lab',
    role: 'Autonomous Navigation Research Intern',
    start_date: 'May 2024',
    location: 'College Park, MD',
    link: 'https://arxiv.org/abs/2409.14262',
    bullets: [
      'Constructed 3D point cloud maps from LiDAR, GPS, IMU, and camera sensor data using SLAM algorithms',
      'Filtered point clouds of 100M+ points with RANSAC plane fitting to remove ground points and isolate obstacles',
      'Annotated processed maps according to traversability, creating a labeled and trainable dataset for autonomous navigation',
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
      'Reduced execution times by 90% by skipping non-branching instructions, circumventing evasive malware tactics',
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
      'Implemented a flexible architecture using ragged tensors to account for variable depth in CT scans',
      'Developed a data pipeline using data loaders to efficiently process a 70GB dataset with limited memory constraints',
      'Optimized accuracy through hyperparameter tuning to achieve an F1 score of 0.8235',
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
    bullets: [
      'Provided excellent customer service to improve the shopping experience by being personable and knowledgeable',
      'Collaborated with coworkers to leverage specific individual strengths and efficiently allocate tasks, optimizing workflow and avoiding customer congestion',
    ],
  },
]
