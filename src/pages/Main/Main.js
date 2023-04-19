import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <nav>
          <div className="nav-logo">
            <i className="fab fa-instagram nav-logo__icon" />
            <div className="nav-logo__center" />
            <h1 className="nav-logo__title">Westagram</h1>
          </div>
          <div className="nav-search">
            <input
              type="text"
              placeholder="검색"
              className="nav-search__input"
            />
            <i className="fas fa-search nav-search__icon" />
          </div>
          <div className="nav-info">
            <img
              alt="탐색 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="좋아요 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="사람 이미지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
        <main className="main-wrapper">
          <section className="feeds">
            <article>
              <div className="feeds-header">
                <div className="feeds-header__profile">
                  <img
                    alt="프로필 사진"
                    className="profile-image"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  />
                  <span>candy_lp</span>
                </div>
                <i className="fas fa-ellipsis-h" />
              </div>
              <img
                alt="피드 이미지"
                className="feed-image"
                src="https://images.unsplash.com/photo-1538943186303-104afadcbb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <div className="feed-icons">
                <div className="feed-icons__left">
                  <i className="fas fa-heart" />
                  <i className="far fa-comment fa-flip-horizontal" />
                  <img
                    alt="업로드 이미지"
                    src="https://icon-library.com/images/upload-icon-png/upload-icon-png-16.jpg"
                    width="25"
                    height="25"
                  />
                </div>
                <i className="far fa-bookmark" />
              </div>
              <div className="feed-heart">
                <img
                  alt="프로필 이미지"
                  width="20"
                  height="20"
                  src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <div>
                  <span>youworld</span>님 <span>외 10명</span>이 좋아합니다
                </div>
              </div>
              <p className="feed-content">
                <span>candy_lp</span> 너-무 행복했던 4월 1일💕...
                <span>더 보기</span>
              </p>
              <div className="feed-comments">
                <div className="feed-comment">
                  <p>
                    <span className="comment-id">qxxxqwwi</span>
                    <span className="comment-content">👍👍</span>
                  </p>
                  <div className="comment-icon__wrapper">
                    <i className="far fa-heart heart false" />
                  </div>
                </div>
              </div>
              <p className="feed-time">42분 전</p>
              <div className="write-comment">
                <input
                  className="write-comment__input"
                  placeholder="댓글 달기..."
                />
                <span className="write-comment__btn">게시</span>
              </div>
            </article>
          </section>
          <aside className="main-right">
            <div className="user-profile">
              <div className="user-profile__img">
                <img
                  alt="프로필 이미지"
                  src="https://avatars.githubusercontent.com/u/52394741?s=200&v=4"
                />
              </div>
              <div className="user-profile__info">
                <span className="user-id">wecode_bootcamp</span>
                <span className="user-name">WeCode | 위코드</span>
              </div>
            </div>
            <div className="story">
              <div className="header">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="story-users">
                <img
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <span>_yum_s</span>
                  <span>16분 전 </span>
                </div>
              </div>
              <div className="story-users">
                <img
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <span>drink_drink</span>
                  <span>3시간 전 </span>
                </div>
              </div>
              <div className="story-users">
                <img
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1510337550647-e84f83e341ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                />
                <div>
                  <span>quckyc</span>
                  <span>20시간 전 </span>
                </div>
              </div>
            </div>
            <div className="recommendation">
              <div className="header">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="recommendation-users">
                <img
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1680009178685-34784413ffe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <span>joaaaahye</span>
                  <span>_legnd님 외 2명이 ...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendation-users">
                <img
                  alt="프로필 이미지"
                  src="https://plus.unsplash.com/premium_photo-1679822641085-b40f412dcd7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div>
                  <span>rampart80</span>
                  <span>ring.in.seoul님 외 12...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendation-users">
                <img
                  alt="프로필 이미지"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
                />
                <div>
                  <span>shawnjjoo</span>
                  <span>jimmy1004님 외 1...</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
            <div className="footer">
              <p>
                Westagram 정보 · 지원 · 홍보센터 · API · 채용 정보 ·
                개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
              </p>
              <span>© 2023 WESTAGRAM</span>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Main;
