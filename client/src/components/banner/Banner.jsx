
import { styled, Box, Typography } from '@mui/material';

 

const Heading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height: 1;
    marginTop:30px
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
     
`;

const Banner = () => {
    
    return (
        <>
        <div className="bg-blue-500 h-[12rem] rounded-md flex items-center justify-center flex-col">
        <Heading>BLOGVERSE</Heading>
         <SubHeading>Explore the Blogverse</SubHeading>        
        </div>
        

        </>
         
            
         
    )
}

export default Banner;