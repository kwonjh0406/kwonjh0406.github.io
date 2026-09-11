"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";

const navigation = [
  { id: "about", label: "소개" },
  { id: "experience", label: "경력" },
  { id: "skills", label: "기술" },
  { id: "projects", label: "프로젝트" },
  { id: "certifications", label: "자격증" },
];

export default function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = navigation.map(({ id }) => document.getElementById(id));
      let current = "about";
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 180) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = "certifications";
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <header className="header">
        <div className="header-inner">
          <a className="wordmark" href="#about">포트폴리오</a>
          <nav aria-label="주요 메뉴">
            {navigation.map(({ id, label }) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>{label}</a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main id="main" className="content">
        <section id="about" className="about" aria-labelledby="about-title">
          <div className="profile-identity">
            <h1 id="about-title">권준형</h1>
            <div className="profile-links">
              <a href="https://github.com/kwonjh0406" target="_blank" rel="noopener noreferrer" aria-label="kwonjh0406 GitHub (새 탭)"><span className="contact-label">GitHub</span><span>kwonjh0406</span></a>
              <a href="https://programmerjoon.tistory.com/" target="_blank" rel="noopener noreferrer" aria-label="권준형 블로그 (새 탭)"><span className="contact-label">블로그</span><span>programmerjoon.tistory.com</span></a>
              <a href="mailto:kwonjh0406@gmail.com"><span className="contact-label">이메일</span><span>kwonjh0406@gmail.com</span></a>
            </div>
          </div>
          <div className="education" aria-labelledby="education-title">
            <h2 id="education-title">학력</h2>
            <h3>한국공학대학교</h3>
            <p className="education-major">컴퓨터공학부</p>
            <div className="education-meta">
              <p><span className="education-label">재학 기간</span><span><time dateTime="2020-03">2020.03</time> – <time dateTime="2026-02">2026.02</time></span></p>
              <p><span className="education-label">학점</span><span className="education-grade">4.11</span></p>
            </div>
          </div>
        </section>
        <section id="experience" className="section" aria-labelledby="experience-title">
          <h2 id="experience-title">경력</h2>
          <ol className="experience-timeline" aria-label="경력 및 교육 이력">
            <li className="timeline-item">
              <p className="experience-period"><time dateTime="2025-09">2025.09</time><span aria-hidden="true"> – </span><time dateTime="2026-04">2026.04</time></p>
              <article className="experience-entry">
                <p className="experience-type">교육</p>
                <h3 className="experience-company"><Image src="/logos/megazone-cloud.svg" alt="메가존클라우드" width={141} height={33} className="company-logo" /></h3>
                <p className="experience-course">MSP Solutions Architect 양성 과정</p>
              </article>
            </li>
          </ol>
        </section>
        <section id="skills" className="section" aria-labelledby="skills-title">
          <h2 id="skills-title">기술</h2>
          <div className="skill-groups">
            <div className="skill-group">
              <h3>클라우드 · 인프라</h3>
              <ul><li>AWS</li><li>Kubernetes</li><li>Terraform</li></ul>
            </div>
            <div className="skill-group">
              <h3>백엔드 · 데이터</h3>
              <ul><li>Java / Spring Boot</li><li>MySQL</li></ul>
            </div>
            <div className="skill-group">
              <h3>배포 · 모니터링</h3>
              <ul><li>CI/CD <span>(ArgoCD)</span></li><li>Observability <span>(Prometheus, Grafana)</span></li></ul>
            </div>
          </div>
        </section>
        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title">프로젝트</h2>
          <p className="empty">등록된 프로젝트가 없습니다.</p>
        </section>
        <section id="certifications" className="section" aria-labelledby="certifications-title">
          <h2 id="certifications-title">자격증</h2>
          <ul className="certification-list">
            <li className="certification">
              <Image src="/certifications/cka-certified-kubernetes-administrator.png" alt="CKA 자격증 배지" width={88} height={88} className="certification-badge" />
              <div className="certification-info">
                <h3>Certified Kubernetes Administrator</h3>
                <p>The Linux Foundation</p>
                <time dateTime="2026-09-07">2026.09.07 취득</time>
                <div className="credential-action">
                  <a className="credential-link" href="https://www.credly.com/badges/2fe47a20-7950-419c-957b-9ea7c9d78b5b/public_url" target="_blank" rel="noopener noreferrer" aria-label="CKA 인증 확인 (새 탭)">Verify Credential <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </li>
            <li className="certification">
              <Image src="/certifications/aws-certified-solutions-architect-associate.png" alt="AWS SAA 자격증 배지" width={88} height={88} className="certification-badge" />
              <div className="certification-info">
                <h3>AWS Certified Solutions Architect – Associate</h3>
                <p>Amazon Web Services Training and Certification</p>
                <time dateTime="2025-04-20">2025.04.20 취득</time>
                <div className="credential-action">
                  <a className="credential-link" href="https://www.credly.com/badges/ad56b18f-3d8c-4eed-a544-3a99fe6721e1/public_url" target="_blank" rel="noopener noreferrer" aria-label="AWS SAA 인증 확인 (새 탭)">Verify Credential <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer"><span>© 2026</span><a href="#about">맨 위로</a></footer>
    </>
  );
}
