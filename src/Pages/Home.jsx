import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Home.css";
import OrbitSkills from "../Context/orbit";

export default function Home() {
    const { isDark } = useContext(ThemeContext);
    const [modal, setModal] = useState(null)
    const [slideIndex, setSlideIndex] = useState(0)
    const modalData = {
        rentcar: {
            title: '렌트카 프로젝트',
            slides: [
                { gif: 'charangGIF/regist.gif', label: '회원가입' },
                { gif: 'charangGIF/login.gif', label: '로그인' },
                { gif: 'charangGIF/findid.gif', label: '아이디 찾기' },
                { gif: 'charangGIF/resetpw.gif', label: '비밀번호 재설정' },
                { gif: 'charangGIF/modinfo.gif', label: '회원정보 수정' },
                { gif: 'charangGIF/unreg.gif', label: '회원탈퇴' },
                { gif: 'charangGIF/reservation.gif', label: '차량 예약' },
                { gif: 'charangGIF/inquiry.gif', label: '문의하기' },
                { gif: 'charangGIF/admin.gif', label: '관리자 페이지' },
                { gif: 'charangGIF/location.gif', label: '지점 찾기' },
            ]
        },
        ott: {
            title: 'OTT 프로젝트',
            slides: [
                { gif: 'ottGIF/ott.gif', label: '메인 서비스' },
            ]
        },
        movie: {
            title: '메가박스 프로젝트',
            slides: [
                { gif: 'movieGIF/moviehome.gif', label: '메인 홈' },
                { gif: 'movieGIF/moviebook.gif', label: '영화 예매' },
            ]
        },
        rentcarCon: {
            title: '렌트카 프로젝트 기여',
            slides: [
                { gif: null,label:'기여 목록', desc:[
                    '회원가입 시 비밀번호 암호화',
                    '로그인/로그아웃 세션관리',
                    '회원 조회/수정/삭제',
                    '이메일 인증번호 발송 · 검증 후 비밀번호 재설정',
                    '디바운싱 기반 실시간 검색',
                    '푸터 최신 공지사항 실시간 출력',
                    'React Router Outlet을 활용한 관리자/일반 회원 라우터 분리',
                    'Pandas 데이터 집계 및 관리자 통계 대시보드 구현'
                ]},
                { gif: 'charangCon/encodepw.gif', label: '비밀번호 암호화'},
                { gif: 'charangCon/login.gif', label: '로그인/로그아웃'},
                { gif: 'charangCon/findid.gif', label: '아이디찾기'},
                { gif: 'charangCon/resetpw.gif', label: '비밀번호 재설정 E-mail API'},
                { gif: 'charangCon/modinfo.gif', label: '회원정보 수정' },
                { gif: 'charangCon/unreg.gif', label: '회원 탈퇴'},
                { gif: 'charangCon/searchfast.gif', label: '실시간 검색'},
                { gif: 'charangCon/noitcefooter.gif', label: '푸터 최신 공지사항'},
                { gif: 'charangCon/guide.gif', label: '이용가이드'},
                { gif: 'charangCon/dashboard.gif', label: '통계'},
                { gif: 'charangCon/scrollandquick.gif', label: '위로가기/최근본차량 바로가기'},
                { gif: 'charangCon/FAQ.gif', label: '자주찾는질문'}
            ]
        },
        ottCon: {
            title: 'OTT 프로젝트 기여',
            slides: [
                { gif: null, label: '기여 목록',desc:[
                    '로컬스토리지 기반 로그인/로그아웃 및 개별 프로필 관리',
                    '개별 프로필 찜 목록 관리',
                    '상세보기 및 추천 영화 랜덤 출력'
                ]},
                { gif: 'ottCon/ottloginlogout.gif', label: '로그인/로그아웃 및 프로필 관리'},
                { gif: 'ottCon/ottlike.gif', label: '찜 목록 관리'},
                { gif: 'ottCon/ottdetailrandom.gif', label: '상세보기 및 추천 영화'},
            ]
        },
        movieCon: {
            title: '메가박스 프로젝트 기여',
            slides: [
                { gif: null, label: '기여 목록',desc:[
                    '메인 홈페이지 UI 구현','JavaScript 동적 UI 처리'
                ]},
                { gif: 'movieCon/moviehome.gif', label: '메인 홈'}
            ]
        }
    }

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('이메일이 복사되었습니다.')
        } catch (err) {
        }
    };

    return (
        <div className="home-wrap">
            <div className="home-sec1">
                <div className="sec1-right">
                    <h1 className={`home-title ${isDark ? 'dark' : 'light'}`}>안녕하세요</h1>
                    <h1 className={`home-title2 ${isDark ? 'dark' : 'light'}`}>웹 개발자</h1>
                    <h1 className={`home-title3 ${isDark ? 'dark' : 'light'}`}>박찬하입니다</h1>
                    <p className={`home-sub ${isDark ? 'dark' : 'light'}`}>
                        #검색과 삽질을 반복하며 성장 중입니다.
                    </p>
                </div>
                <div className="char-wrap">
                    <img src="cha_light.png" style={{ opacity: isDark ? 0 : 1 }} />
                    <img src="cha_dark.png" style={{ opacity: isDark ? 1 : 0 }} />
                </div>
            </div>
            <hr className={isDark ? 'dark' : 'light'} />
            <div className={`scroll-arrow ${isDark ? 'dark' : 'light'}`}>
                <i className="fa-solid fa-arrow-down"></i>
            </div>
            <div className='home-sec2' id="About">
                <div className="sec2-left">
                    <h1 className={`sec2-title ${isDark ? 'dark' : 'light'}`}>About</h1>
                    <div className="sec2-left-intro">
                        <p className={isDark ? 'dark' : 'light'}>
                            아직 모르는 게 많습니다<br />
                            그만큼 배울 이유도 많다고 생각합니다<br />
                            막히는 것 앞에서 멈추지 않고<br />
                            하나씩 이해해가며 성장하는 개발자입니다<br /><br />
                            프론트엔드와 백엔드를 모두 경험하며<br />
                            풀스택 개발자를 목표로 성장하고 있습니다
                        </p>
                    </div>
                    <div className="sec2-left-contact">
                        <div className="sec2-left-contact-row">
                            <span className={isDark ? 'dark' : 'light'}>E-Mail</span>
                            <span className={isDark ? 'dark' : 'light'}>cksgk154@naver.com<i onClick={() => copyText('cksgk154@naver.com')} className="fa-regular fa-copy" /></span>
                        </div>
                        <div className="sec2-left-contact-row">
                            <span className={isDark ? 'dark' : 'light'}>Phone</span>
                            <span className={isDark ? 'dark' : 'light'}>010-4333-4968</span>
                        </div>
                        <div className="sec2-left-contact-row">
                            <span className={isDark ? 'dark' : 'light'}>GitHub</span>
                            <a href="https://github.com/parkch9911" target="_blank" rel="noreferrer" className={isDark ? 'dark' : 'light'}>github.com/parkch9911    </a>
                        </div>
                    </div>
                </div>
                <div className="sec2-right">
                    <OrbitSkills />
                </div>
            </div>
            <hr className={isDark ? 'dark' : 'light'} />
            <div className="home-sec3">
                <div className="home-sec3" id="Projects">
                    <h1 className={`sec3-title ${isDark ? 'dark' : 'light'}`}>Projects</h1>
                    <div className="project-list">
                        <div className="project-item">
                            <div className="project-img-wrap">
                                <img src="renthome.JPG" alt="렌트카" />
                            </div>
                            <div className={`project-info ${isDark ? 'dark' : 'light'}`}>
                                <h2>렌트카 프로젝트</h2>
                                <p>기존 프론트엔드 프로젝트에 JAVA 기반의 Spring Boot 프레임 워크와
                                    MyBatis(persistaence Framework)를 활용하고, MySQL DBMS를 <br />연동하여 '렌터카 예약 웹 서비스'를 개발
                                    백엔드 서버를 구축하고 Axios<br /> 활용한 REST API 연동구조로 전환,
                                    완성된 풀스택 서비스를<br /> CloudType 클라우드 환경에 배포<br />
                                    ID : test / PW : 1234  ＆  관리자 ID : admin / PW : 1234
                                </p>
                                <div className="project-stack">
                                    <span>React</span>
                                    <span>SpringBoot</span>
                                    <span>MySQL</span>
                                    <span>Python</span>
                                </div>
                                <div className="pjtbox">
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('rentcar'); setSlideIndex(0) }}><i className="fa-solid fa-magnifying-glass" />상세보기</span>
                                    <a href="https://github.com/jaykim1993/charang2026" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-brands fa-github" />GitHub
                                    </a>
                                    <a href="https://port-0-charang2026-mma8g0s58d0aa22f.sel3.cloudtype.app/" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-solid fa-up-right-from-square" />배포 링크
                                    </a>
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('rentcarCon'); setSlideIndex(0) }}><i className="fa-solid fa-chart-pie" /> 기여도</span>
                                </div>
                            </div>
                        </div>
                        <hr className={isDark ? 'dark' : 'light'} />
                        <div className="project-item reverse">
                            <div className="project-img-wrap">
                                <img src="otthome.JPG" alt="OTT" />
                            </div>
                            <div className={`project-info ${isDark ? 'dark' : 'light'}`}>
                                <h2>OTT 프로젝트</h2>
                                <p>React와 Context API를 활용해 OTT 웹 서비스의 메인 및 콘텐츠 페이지를 <br />
                                    구현하고, TMDB(Open Movie Database) API를 JSON 형식으로 연동해 <br />영화 · 드라마 데이터를 동적으로 표시하여
                                    GitHub Pages에 배포<br />
                                    ID : 1234 / PW : 1234
                                </p>
                                <div className="project-stack">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>React</span>
                                    <span>JavaScript</span>
                                </div>
                                <div className="pjtbox">
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('ott'); setSlideIndex(0) }}><i className="fa-solid fa-magnifying-glass" />상세보기</span>
                                    <a href="https://github.com/parkch9911/ott-2jo-1112" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-brands fa-github" />GitHub
                                    </a>
                                    <a href="https://parkch9911.github.io/ott-2jo-1112/" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-solid fa-up-right-from-square" />배포 링크
                                    </a>
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('ottCon'); setSlideIndex(0) }}><i className="fa-solid fa-chart-pie" />기여도</span>
                                </div>
                            </div>
                        </div>
                        <hr className={isDark ? 'dark' : 'light'} />
                        <div className="project-item">
                            <div className="project-img-wrap">
                                <img src="moviehome.JPG" alt="메가박스" />
                            </div>
                            <div className={`project-info ${isDark ? 'dark' : 'light'}`}>
                                <h2>메가박스 프로젝트</h2>
                                <p>HTML5, CSS3, JavaScript를 활용해 영화관 메인 페이지와 예매 화면을 <br />구현하고,
                                    시멘틱 마크업과 CSS 레이아웃으로 웹 표준에 맞게 구조를 설계하여
                                    실제 영화 예매 사이트와 유사한 사용자 경험을 제공한 프로젝트</p>
                                <div className="project-stack">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                </div>
                                <div className="pjtbox">
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('movie'); setSlideIndex(0) }}><i className="fa-solid fa-magnifying-glass" />상세보기</span>
                                    <a href="https://github.com/parkch9911/mega" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-brands fa-github" />GitHub
                                    </a>
                                    <a href="https://parkch9911.github.io/mega/index.html" target="_blank" rel="noreferrer"
                                        className={isDark ? 'dark' : 'light'}><i className="fa-solid fa-up-right-from-square" />배포 링크
                                    </a>
                                    <span className={isDark ? 'dark' : 'light'} onClick={() => { setModal('movieCon'); setSlideIndex(0) }}><i className="fa-solid fa-chart-pie" />기여도</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr className={isDark ? 'dark' : 'light'} />
            <div className="home-sec4" id="Training">
                <h1 className={`sec4-title ${isDark ? 'dark' : 'light'}`}>Training</h1>
                <div className="timeline">
                    <div className="timeline-item left">
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2024.08.29.</span>
                            <h3>그린컴퓨터아카데미 입학</h3>
                            <p>UIUX프론트 · 백엔드(Java, Spring) · Data분석(Python)<br /> SW개발자 양성과정</p>
                        </div>
                        <div className="timeline-dot" />
                        <div />
                    </div>

                    <div className="timeline-item right">
                        <div />
                        <div className="timeline-dot" />
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2025.10.15. ~ 2025.10.17.</span>
                            <h3>메가박스 웹 클론 프론트엔드 프로젝트</h3>
                            <p>HTML · CSS · JavaScript</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2025.11.10. ~ 2025.11.13.</span>
                            <h3>OTT 웹 서비스 프론트엔드 프로젝트</h3>
                            <p>React · TMDB API</p>
                        </div>
                        <div className="timeline-dot" />
                        <div />
                    </div>

                    <div className="timeline-item right">
                        <div />
                        <div className="timeline-dot" />
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2025.12.01. ~ 2025.12.29.</span>
                            <h3>렌트카 웹 서비스 프로젝트 프론트엔드</h3>
                            <p>React · Vite</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2026.02.05. ~ 2026.03.05.</span>
                            <h3>렌트카 웹 서비스 프로젝트 백엔드</h3>
                            <p>SpringBoot · MySQL</p>
                        </div>
                        <div className="timeline-dot" />
                        <div />
                    </div>

                    <div className="timeline-item right">
                        <div />
                        <div className="timeline-dot" />
                        <div className={`timeline-content ${isDark ? 'dark' : 'light'}`}>
                            <span className="timeline-date">2026.04.07.~</span>
                            <h3>그린컴퓨터아카데미 수료</h3>
                            <p>현재 구직 중</p>
                        </div>
                    </div>

                </div>
            </div>
           {modal && (
    <div className="modal-backdrop" onClick={() => setModal(null)}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            <h3 className="modal-title">
                {modalData[modal].title} — {modalData[modal].slides[slideIndex].label}
            </h3>
            <div className="modal-slider">
                <button className="slide-btn prev" disabled={slideIndex === 0}
                    onClick={() => setSlideIndex(i => i - 1)}>‹</button>

                {modalData[modal].slides[slideIndex].gif === null ? (
                    <div className="modal-desc-slide">
                        <ul>
                            {modalData[modal].slides[slideIndex].desc.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <img src={modalData[modal].slides[slideIndex].gif}
                        alt={modalData[modal].slides[slideIndex].label} />
                )}

                <button className="slide-btn next" disabled={slideIndex === modalData[modal].slides.length - 1}
                    onClick={() => setSlideIndex(i => i + 1)}>›</button>
            </div>
            <div className="slide-dots">
                {modalData[modal].slides.map((_, i) => (
                    <span
                        key={i}
                        className={`slide-dot ${i === slideIndex ? 'active' : ''}`}
                        onClick={() => setSlideIndex(i)}
                    />
                ))}
            </div>
        </div>
    </div>
)}
        </div>
    );
}
