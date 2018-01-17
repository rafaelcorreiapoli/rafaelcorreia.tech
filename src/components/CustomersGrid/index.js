import React from 'react'
import { array, number, shape } from 'prop-types'
import { CSSGrid, measureItems } from 'react-stonecutter'
import sizeMe from 'react-sizeme'
import CustomerCard from '../CustomerCard'
import FadeIn from '../FadeIn'

const Grid = measureItems(CSSGrid, { measureImages: true })

const CustomersGrid = ({
  customers,
  size,
}) => {
  const gutterWidth = 20
  const columnWidth = 200
  const minPadding = 0;
  const columns = Math.floor((size.width - minPadding) / (columnWidth + gutterWidth));
  return (
    <div style={{ width: '100%' }}>
      <FadeIn>
        <Grid
          component="div"
          columnWidth={columnWidth}
          gutterWidth={gutterWidth}
          gutterHeight={20}
          columns={columns}
          itemHeight={222}
          duration={300}
          easing="ease-out"
        >
          {customers.map(customer => (
            <div key={customer.id}>
              <CustomerCard

                {...customer}
              />
            </div>
          ))}
        </Grid>
      </FadeIn>

    </div>

  )
}


CustomersGrid.propTypes = {
  customers: array.isRequired,
  size: shape({
    width: number,
    height: number,
  }).isRequired,
}

export default sizeMe()(CustomersGrid)
