import { Link } from 'react-router-dom';
import { iconLoader } from '../../../utils/iconLoader';
import * as S from './GlobalNavbar.styles';

const GlobalNavbar = () => (
  <S.Header>
    <S.Nav>
      <S.IconContainerDiv>{iconLoader('github', 32)}</S.IconContainerDiv>

      <S.InputWrapper>
        <S.InputSearch type="text" placeholder="Search or jump to…" />
        <div className="input-hack">/</div>
      </S.InputWrapper>

      <S.Ul>
        <S.Li>
          <Link to={window.location.pathname}>Pull requests</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Issues</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Marketplace</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Explore</Link>
        </S.Li>
      </S.Ul>
    </S.Nav>
  </S.Header>
);

export default GlobalNavbar;
