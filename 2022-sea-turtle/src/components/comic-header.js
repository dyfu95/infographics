import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThreeLineMenu from './three-line-menu';
import Share from './share';
import scrollIntoComic from '../utils/scroll-into-comic';
//TODOs: combine additional part into  catalog-header.js
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  background: #f8f3e8;
  height: 45px;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 861px) {
    height: 65px;
    justify-content: space-between;
  }
  .mirrormedia-logo {
    width: 62px;
    height: 26px;
    margin: 16px 0 0 24px;
    @media (min-width: 861px) {
      width: 90px;
      height: 38px;
    }
  }
`;

//additional css
const ComicTitleWrapper = styled.ul`
  display: none;
  margin: 0 22.28px;
  padding: 0;
  width: 100%;
  justify-content: flex-start;

  @media (min-width: 861px) {
    display: flex;
  }
  .title {
    cursor: pointer;
    margin: 11px auto 0 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .comic-title {
    list-style-type: none;
    display: flex;
    cursor: pointer;
    margin: 18px 16px 0 0;
    align-items: center;
    height: 43px;
    span {
      font-size: 6px;
      margin-right: 6px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

ComicHeader.propTypes = {
  shouldShowComicHeader: PropTypes.bool,
};
//TODOs: should use picture& src set to set corresponding type of icon in different viewport
export default function ComicHeader(props) {
  return (
    <HeaderWrapper>
      <a
        href="https://www.mirrormedia.mg/"
        target="_blank"
        rel="noreferrer noopenner"
      >
        <img className="mirrormedia-logo" src="mirrormedia-icon.svg"></img>
      </a>

      {props.shouldShowComicHeader && (
        <ComicTitleWrapper>
          <li className="title">
            <img src="/title/title.png"></img>
          </li>
          <li
            className="comic-title"
            onClick={() => scrollIntoComic('nightmare')}
          >
            <span>&#11044;</span>
            <img src="/title/comic-title-nightmare.png"></img>
          </li>
          <li className="comic-title" onClick={() => scrollIntoComic('holic')}>
            <span>&#11044;</span>
            <img src="/title/comic-title-holic.png"></img>
          </li>
          <li
            className="comic-title"
            onClick={() => scrollIntoComic('spectre')}
          >
            <span>&#11044;</span>
            <img src="/title/comic-title-spectre.png"></img>
          </li>
          <li
            className="comic-title"
            onClick={() => scrollIntoComic('eudemons')}
          >
            <span>&#11044;</span>
            <img src="/title/comic-title-eudemons.png"></img>
          </li>
        </ComicTitleWrapper>
      )}
      <Share />
      <ThreeLineMenu></ThreeLineMenu>
    </HeaderWrapper>
  );
}
