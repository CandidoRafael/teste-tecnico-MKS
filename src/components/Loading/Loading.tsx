import { Grid, Box, Typography, Skeleton } from '@mui/material';
import { Product, Products } from '../../types/Product';

type LoadingProps = {
  data: Products | undefined
  loading: boolean
}

const Loading = ({ data, loading }: LoadingProps) => {
  return (
    <Grid container spacing={2}>

      {(loading ? Array.from(new Array(8)) : data?.products ?? []).map((item: Product | undefined, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ width: '100%' }}>
            {item ? (
              <img
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
                alt='imagem produto'
                src={item.photo}
              />
            ) : (
              <Skeleton variant="rectangular" width="96%" height={300} style={{borderRadius: '5px'}} />
            )}
            {item ? (
              <Box sx={{ pr: 2, pt: 1 }}>
                <Typography gutterBottom variant="body2">
                  {item.name}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5, pr: 2 }}>
                <Skeleton width="100%" height={50} style={{borderRadius: '0 0 8px 8px'}} />
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Loading;
