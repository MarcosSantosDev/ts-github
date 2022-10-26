import { user } from '../mock';
import Details from './Details/Details';
import * as S from './Profile.styles';
import ProfileInformation from './ProfileInformation/ProfileInformation';

const Profile = () => {
  return (
    <S.ContainerDiv>
      <ProfileInformation
        avatar_url={user.avatar_url}
        login={user.login}
        name={user.name}
      />
      <Details user={user} />
    </S.ContainerDiv>
  );
};

export default Profile;
