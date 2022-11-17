import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar src='https://imgs.search.brave.com/mDYN8kTUqH2SEkK_Qt1ragZEDSN7u8UQ_prlZKSJzBE/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2Nh/Lzg0L2ZlY2E4NGNj/MTkyOTVkYWQzOGY5/NGJjZjk4ZGRlYTBl/LmpwZw' />
          <AccessTimeIcon />
        </HeaderLeft>
        <HeaderMiddle>
          <input type="text" placeholder='Search Oniichan' />
          <SearchIcon style={{cursor:"pointer"}} />
        </HeaderMiddle>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  padding: 7px 20px;
  background-color: #3f0f40;
  color: white;
  width: 100vw;
  position: fixed;
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.2;
  align-items: center;

  > .MuiSvgIcon-root{
    margin-left: auto;
  }
`
const HeaderRight = styled.div`
  flex:0.3;
  display: flex;
  justify-content: end;
  cursor: pointer;
`
const HeaderMiddle = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 5px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  border: 1px gray solid;
  padding: 5px 0px;

  > input{
    background-color: transparent;
    border: none;
    outline: none;
    min-width: 32vw;
    padding: 0px 10px;
    color: white;
  }
`
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  transition: all 0.3s;

  :hover{
    opacity: 0.7;
  }
`