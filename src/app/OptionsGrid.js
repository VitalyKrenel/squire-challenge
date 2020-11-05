import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const OptionsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  margin: 0 0 64px;
  font-family: SF Pro Display, sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.37px;
  line-height: 41px;
`;

const Grid = styled.section`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(3, 1fr);
`;

const OptionsGrid = observer(({ heading, collection, children }) => (
  <OptionsLayout>
    <Heading>{heading}</Heading>
    <Grid>
      {collection.map((item) => children(item))}
    </Grid>
  </OptionsLayout>
));

OptionsGrid.propTypes = {
  heading: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(PropTypes.any).isRequired,
  children: PropTypes.func.isRequired,
};

export { OptionsGrid };
