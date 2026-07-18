---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class="anchor" id="about-me"></span>

<section class="research-hero" aria-labelledby="research-hero-title">
  <h1 id="research-hero-title">Humanoid Robot Learning</h1>
  <p class="research-hero__intro">
    I am a second-year Ph.D. student at Fudan University and Shanghai Innovation Institute, advised by
    <a href="https://lihongyang.info/">Prof. Hongyang Li</a> and
    <a href="https://mmlab.siat.ac.cn/yuqiao">Prof. Yu Qiao</a>. My research explores how humanoids can learn
    versatile loco-manipulation skills from human demonstrations and multimodal experience.
  </p>
  <div class="research-hero__actions">
    <a class="hero-button hero-button--primary" href="#selected-projects">Selected work <span aria-hidden="true">↓</span></a>
    <a class="hero-button" href="https://scholar.google.com/citations?user=t9txi-IAAAAJ">Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" id="news">
  <header class="section-heading">
    <h1>News</h1>
  </header>
  <div class="news-timeline">
    <article class="news-item news-item--highlight">
      <time datetime="2026-07">2026.07</time>
      <p><strong>SMASH</strong> is accepted by IEEE Transactions on Robotics (T-RO).</p>
    </article>
    <article class="news-item">
      <time datetime="2026-05">2026.05</time>
      <p><strong>EgoHumanoid</strong> is fully open-sourced and accepted by RSS 2026.</p>
    </article>
    <article class="news-item">
      <time datetime="2026-04">2026.04</time>
      <p>We release <strong>SMASH</strong>, mastering scalable whole-body skills for humanoid ping-pong with egocentric vision.</p>
    </article>
    <article class="news-item">
      <time datetime="2026-02">2026.02</time>
      <p>We release <strong>EgoHumanoid</strong>, a human-to-humanoid loco-manipulation transfer framework.</p>
    </article>
    <article class="news-item">
      <time datetime="2026-01">2026.01</time>
      <p><strong>WholeBodyVLA</strong> is accepted by ICLR 2026.</p>
    </article>
  </div>
</section>

<section class="home-section publications-section" id="selected-projects">
  <header class="section-heading">
    <h1>Selected Projects</h1>
  </header>

  <div class="featured-publications">
    <article class="paper-box">
      <div class="paper-box-image">
        <div>
          <img src="images/robopingpong-v2.gif" alt="Humanoid robot playing table tennis in RoboPingpong V2" loading="lazy" width="100%">
        </div>
      </div>
      <div class="paper-box-text">
        <div class="paper-meta"><span class="paper-role paper-role--first">Project Leader</span></div>
        <h2 class="paper-title">Humanoids for sports - RoboPingpong V1</h2>
        <p class="paper-summary">Enhanced for stronger play built on SMASH.<br>RoboPingpong V2 is coming soon with something new...</p>
      </div>
    </article>

    <article class="paper-box">
      <div class="paper-box-image">
        <div>
          <span class="badge">T-RO 2026</span>
          <img src="images/smash_teaser.png" alt="SMASH humanoid robot playing table tennis" width="100%">
        </div>
      </div>
      <div class="paper-box-text">
        <div class="paper-meta"><span class="paper-venue">T-RO 2026</span><span class="paper-role paper-role--core">Core Contributor</span></div>
        <h2 class="paper-title"><a href="https://mmlab.hk/Smash/">SMASH: Mastering Scalable Whole-Body Skills for Humanoid Ping-Pong with Egocentric Vision</a></h2>
        <p class="paper-summary">The first humanoid system to play agile ping-pong in the wild without motion capture.</p>
        <div class="paper-links">
          <a href="https://mmlab.hk/Smash/">Project <span aria-hidden="true">↗</span></a>
          <a href="https://arxiv.org/abs/2604.01158">arXiv <span aria-hidden="true">↗</span></a>
          <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:hqOjcs7Dif8C"></span></strong>
        </div>
      </div>
    </article>

    <article class="paper-box">
      <div class="paper-box-image">
        <div>
          <span class="badge">RSS 2026</span>
          <img src="images/EgoHumanoid.gif" alt="EgoHumanoid whole-body loco-manipulation demonstration" loading="lazy" width="100%">
        </div>
      </div>
      <div class="paper-box-text">
        <div class="paper-meta"><span class="paper-venue">RSS 2026</span><span class="paper-role paper-role--core">Core Contributor</span></div>
        <h2 class="paper-title"><a href="https://opendrivelab.com/EgoHumanoid/">EgoHumanoid: Unlocking In-the-Wild Loco-Manipulation with Robot-Free Egocentric Demonstration</a></h2>
        <p class="paper-summary">The first human-to-humanoid framework for whole-body loco-manipulation from robot-free egocentric demonstrations.</p>
        <div class="paper-links">
          <a href="https://opendrivelab.com/EgoHumanoid/">Project <span aria-hidden="true">↗</span></a>
          <a class="github-repo-link" href="https://github.com/OpenDriveLab/EgoHumanoid" data-github-repo="OpenDriveLab/EgoHumanoid"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span><span class="github-stars" aria-label="196 GitHub stars"><i class="fas fa-star" aria-hidden="true"></i><span data-github-star-count>196</span></span></a>
          <a href="https://arxiv.org/abs/2602.10106">arXiv <span aria-hidden="true">↗</span></a>
          <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:hqOjcs7Dif8C"></span></strong>
        </div>
      </div>
    </article>

    <article class="paper-box">
      <div class="paper-box-image">
        <div>
          <span class="badge">ICLR 2026</span>
          <img src="images/long2.gif" alt="WholeBodyVLA humanoid robot performing loco-manipulation" loading="lazy" width="100%">
        </div>
      </div>
      <div class="paper-box-text">
        <div class="paper-meta"><span class="paper-venue">ICLR 2026</span><span class="paper-role paper-role--first">First Author</span></div>
        <h2 class="paper-title"><a href="https://opendrivelab.com/WholeBodyVLA/">WholeBodyVLA: Towards Unified Latent VLA for Whole-Body Loco-Manipulation Control</a></h2>
        <p class="paper-summary">The first end-to-end humanoid system for large-space whole-body loco-manipulation.</p>
        <div class="paper-links">
          <a href="https://opendrivelab.com/WholeBodyVLA/">Project <span aria-hidden="true">↗</span></a>
          <a class="github-repo-link" href="https://github.com/OpenDriveLab/WholebodyVLA" data-github-repo="OpenDriveLab/WholebodyVLA"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span><span class="github-stars" aria-label="521 GitHub stars"><i class="fas fa-star" aria-hidden="true"></i><span data-github-star-count>521</span></span></a>
          <a href="https://arxiv.org/abs/2512.11047">arXiv <span aria-hidden="true">↗</span></a>
          <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:hqOjcs7Dif8C"></span></strong>
        </div>
      </div>
    </article>

    <article class="paper-box">
      <div class="paper-box-image">
        <div>
          <span class="badge">ICCV 2025</span>
          <img src="images/detany3d-teaser.png" alt="Detect Anything 3D open-world object detection visualization" loading="lazy" width="100%">
        </div>
      </div>
      <div class="paper-box-text">
        <div class="paper-meta"><span class="paper-venue">ICCV 2025</span><span class="paper-role paper-role--first">Co-first Author</span></div>
        <h2 class="paper-title"><a href="https://arxiv.org/abs/2504.07958">Detect Anything 3D in the Wild</a></h2>
        <p class="paper-summary">Promptable monocular 3D object detection for open-world scenes.</p>
        <div class="paper-links">
          <a class="github-repo-link" href="https://github.com/OpenDriveLab/DetAny3D" data-github-repo="OpenDriveLab/DetAny3D"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span><span class="github-stars" aria-label="284 GitHub stars"><i class="fas fa-star" aria-hidden="true"></i><span data-github-star-count>284</span></span></a>
          <a href="https://arxiv.org/abs/2504.07958">arXiv <span aria-hidden="true">↗</span></a>
          <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:LkGwnXOMwfcC"></span></strong>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="home-section" id="more-publications">
  <header class="section-heading">
    <h1>More Publications</h1>
  </header>
  <div class="publication-groups">
    <section class="publication-group" aria-labelledby="generative-ai-heading">
      <h2 id="generative-ai-heading">Generative AI</h2>
      <article class="publication-row">
        <span class="publication-row__venue">NeurIPS 2025</span>
        <p>ForgerySleuth: Empowering Multimodal Large Language Models for Image Manipulation Detection. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:_FxGoFyzp5QC"></span></strong></p>
      </article>
      <article class="publication-row">
        <span class="publication-row__venue">IEEE TVCG 2025</span>
        <p>SketchRefiner: Text-Guided Sketch Refinement Through Latent Diffusion Models. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:ufrVoPGSRksC"></span></strong></p>
      </article>
      <article class="publication-row">
        <span class="publication-row__venue">ICCV 2023</span>
        <p>SAFL-Net: Semantic-Agnostic Feature Learning Network with Auxiliary Plugins for Image Manipulation Detection. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:Y0pCki6q_DkC"></span></strong></p>
        <span class="paper-role paper-role--core">Core Contributor</span>
      </article>
    </section>

    <section class="publication-group" aria-labelledby="machine-learning-heading">
      <h2 id="machine-learning-heading">Machine Learning</h2>
      <article class="publication-row">
        <span class="publication-row__venue">AAAI 2024 <span class="publication-venue-highlight">Oral</span></span>
        <p>Navigating Real-World Partial Label Learning: Unveiling Fine-Grained Images with Attributes. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:UebtZRa9Y70C"></span></strong></p>
        <span class="paper-role paper-role--first">First Author</span>
      </article>
      <article class="publication-row">
        <span class="publication-row__venue">Information Fusion 2025</span>
        <p>Recent Advances in Complementary Label Learning. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:WF5omc3nYNoC"></span></strong></p>
        <span class="paper-role paper-role--corresponding">Corresponding Author</span>
      </article>
      <article class="publication-row">
        <span class="publication-row__venue">Neural Networks 2024</span>
        <p>ComCo: Complementary Supervised Contrastive Learning for Complementary Label Learning. <strong><span class="show_paper_citations" data="t9txi-IAAAAJ:roLk4NBRz8UC"></span></strong></p>
        <span class="paper-role paper-role--first">First Author</span>
      </article>
    </section>
  </div>
</section>

<section class="home-section" id="education">
  <header class="section-heading">
    <h1>Education</h1>
  </header>
  <div class="education-grid">
    <article class="education-card">
      <div class="education-card__logos education-card__logos--phd">
        <img class="education-logo education-logo--seal" src="images/logo-fdu.png?v=28b899c" alt="Fudan University logo">
        <img class="education-logo education-logo--wide" src="images/logo-sii.png" alt="Shanghai Innovation Institute logo">
      </div>
      <span class="education-card__year">2024 — Present</span>
      <div class="education-card__content">
        <h2>Fudan University</h2>
        <p>Ph.D. student in Computer Science</p>
      </div>
    </article>
    <article class="education-card">
      <div class="education-card__logos education-card__logos--masters">
        <img class="education-logo education-logo--ucas" src="images/logo-ucas.png" alt="University of Chinese Academy of Sciences logo">
        <img class="education-logo education-logo--amss" src="images/logo-amss-compact-v2.png" alt="Academy of Mathematics and Systems Science logo">
      </div>
      <span class="education-card__year">2021 — 2024</span>
      <div class="education-card__content">
        <h2>Chinese Academy of Sciences</h2>
        <p>M.S. in Machine Learning and Optimization</p>
      </div>
    </article>
    <article class="education-card">
      <div class="education-card__logos">
        <img class="education-logo education-logo--hnu" src="images/logo-hnu.webp" alt="Hunan University logo">
      </div>
      <span class="education-card__year">2017 — 2021</span>
      <div class="education-card__content">
        <h2>Hunan University</h2>
        <p>B.S. in Statistics · Rank 1/30</p>
      </div>
    </article>
  </div>
</section>

<section class="home-section" id="honors-and-service">
  <header class="section-heading">
    <h1>Honors &amp; Service</h1>
  </header>
  <div class="profile-highlights">
    <article class="profile-highlight-card">
      <h2>Selected Honors</h2>
      <ul>
        <li>National Scholarship</li>
        <li>Beijing University Basketball League · Second Place</li>
      </ul>
    </article>
    <article class="profile-highlight-card">
      <h2>Academic Service</h2>
      <p><strong>Reviewer</strong> · RSS, ICLR, NeurIPS, CVPR, ICCV, AAAI, RA-L</p>
      <p><strong>Organizer</strong> · <a href="https://www.starleague.ai/event2024/">End-to-End Embodied Agents Workshop</a></p>
    </article>
  </div>
</section>
