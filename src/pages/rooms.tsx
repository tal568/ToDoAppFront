import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Typography, Container, Paper, CssBaseline, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation

// Dummy data for rooms
const rooms = [
  { id: 1, name: 'Living Room' },
  { id: 2, name: 'Kitchen' },
  { id: 3, name: 'Bedroom' },
  { id: 4, name: 'Bathroom' },
];

export default function RoomsListPage() {
  const navigate = useNavigate(); // Hook for navigation

  const handleRoomClick = (roomId: number) => {
    // Navigate to the room's task page when a room is clicked
    navigate(`/room/${roomId}`);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
          <Typography component="h2" variant="h6" gutterBottom>
            Choose a Room
          </Typography>
          <List>
            {rooms.map((room) => (
              <ListItem key={room.id} disablePadding>
                <ListItemButton onClick={() => handleRoomClick(room.id)}>
                  <ListItemText primary={room.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
