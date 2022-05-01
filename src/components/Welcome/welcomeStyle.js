import styled from "styled-components";
import { devices } from "../../responsive";

export const StyledW = styled.div`
  background: #141414;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 300px;

  header {
    display: flex;
    width: 100%;
    padding: 10px 0 10px 50px;
    margin-bottom: 50px;
    @media ${devices.mobile} {
      padding: 10px 0px 10px 10px;
      margin-bottom: 100px;
    }

    img {
      width: 150px;
      @media ${devices.mobile} {
        width: 70px;
      }
    }
  }

  section {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .who {
      font-size: 3.5vw;
      font-weight: unset;
    }

    .profile-list {
      display: flex;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 100%;

      @media ${devices.mobile} {
        flex-direction: column;
      }

      .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 150px;

        &:hover {
          img {
            border: 2px solid #fff;
            cursor: pointer;
          }

          span {
            color: #fff;
          }
        }

        img {
          width: 150px;
          border-radius: 5px;
          border: 2px solid transparent;
        }

        span {
          margin-top: 10px;
          text-align: center;
          color: grey;
          font-size: 24px;
        }
      }
    }
  }
`;

// export default Welcome;
