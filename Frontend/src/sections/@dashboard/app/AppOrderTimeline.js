// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

AppOrderTimeline.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppOrderTimeline({ title, subheader, list }) {
  return (
    <Card >
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
          {list.map((item, index) => (
            // <OrderItem key={index} item={item} isLast={index === list.length - 1} />
            <div className='w-full bg-yellow-400'>
              {
                item.map((order,i)=>(
                  <div>{order}</div>
                ))
              }  
            </div>
          ))}
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function OrderItem({ item, isLast }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          // color={
          //   (type === 'order1' && 'primary') ||
          //   (type === 'order2' && 'success') ||
          //   (type === 'order3' && 'info') ||
          //   (type === 'order4' && 'warning') ||
          //   'error'
          // }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{}</Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(item.last_updated)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
