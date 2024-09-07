import React, { useState } from 'react';
import { Container, Paper, Typography, Box, Grid } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import theme from '../theme';

// Initial task data with title, description, and status
const initialTasks = [
    { id: '1', title: 'Task 1', description: 'Description of task 1', status: 'todo' },
    { id: '2', title: 'Task 2', description: 'Description of task 2', status: 'inprogress' },
    { id: '3', title: 'Task 3', description: 'Description of task 3', status: 'done' },
];

// Status categories
const statuses = {
    todo: 'To Do',
    inprogress: 'In Progress',
    done: 'Completed',
};

// TaskBoard Component
export default function TaskBoard() {
    const [tasks, setTasks] = useState(initialTasks);

    // Handle drag end (when the task is dropped)
    const onDragEnd = (result: any) => {
        const { source, destination } = result;

        // If there's no destination (dropped outside a column), do nothing
        if (!destination) return;

        // If dropped in the same place, do nothing
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        // Find the task that is being dragged
        const draggedTask = tasks.find((task) => task.id === result.draggableId);

        if (draggedTask) {
            // Update the task status and reorder
            const updatedTasks = tasks.filter((task) => task.id !== draggedTask.id);
            updatedTasks.splice(destination.index, 0, { ...draggedTask, status: destination.droppableId });
            setTasks(updatedTasks);
        }
    };

    // Render tasks in a specific column
    const renderTasks = (status: string) => {
        return tasks
            .filter((task) => task.status === status)
            .map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                        <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            sx={{ mb: 2 }}
                        >
                            <Paper elevation={2} sx={{ p: 2 }}>
                                <Typography variant="h6">{task.title}</Typography>
                                <Typography variant="body2">{task.description}</Typography>
                            </Paper>
                        </Box>
                    )}
                </Draggable>
            ));
    };

    return (
        <Container component="main" maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Grid container spacing={2}>
                        {/* Loop through each status and create a column */}
                        {Object.keys(statuses).map((status) => (
                            <Grid item xs={4} key={status}>
                                <Typography variant="h6" gutterBottom>
                                    {statuses[status]}
                                </Typography>
                                <Droppable droppableId={status}>
                                    {(provided) => (
                                        <Paper
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            sx={{ p: 2, minHeight: '300px', bgcolor: (theme) => theme.palette.background.paper }}
                                        >
                                            {renderTasks(status)}
                                            {provided.placeholder}
                                        </Paper>
                                    )}
                                </Droppable>
                            </Grid>
                        ))}
                    </Grid>
                </DragDropContext>
            </Box>
        </Container>
    );
}
