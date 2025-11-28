import styled from "styled-components";
export const TopBarContainer = styled.div`
  width: 100%;
  height: 60px; /* adjust height if needed */
  background-color: #0B2447; /* dark blue, matches your app theme */
  display: flex;
  align-items: center;        /* vertically center content */
  justify-content: space-between; /* space between left/right content */
  padding: 0 20px;            /* spacing from sides */
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* subtle shadow */
  position: sticky;           /* sticks to top on scroll */
  top: 0;
  z-index: 1000;
`;