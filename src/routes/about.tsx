import { Box, Chip, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 6 }}>
                <Typography variant="h3" gutterBottom>
                    About
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    The music version of Letterboxd.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Log the albums and songs you've listened to, rate and review them,
                    organize everything into lists, and follow friends to see what
                    they're spinning.
                </Typography>
            </Box>

            <Divider sx={{ mb: 6 }} />

            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    What You Can Do
                </Typography>
                <List>
                    {[
                        'Follow friends and see what they\'re listening to',
                        'Create lists of songs and albums you\'ve listened to',
                        'Rank songs within an album',
                        'Write reviews for songs and albums',
                        'Comment on other users\' reviews',
                        'Build a watchlist of things you want to listen to',
                        'Customize your profile with a light or dark theme',
                        'Browse dedicated pages for each song and album',
                        'Discover popular albums and reviews on the home page',
                    ].map((feature) => (
                        <ListItem key={feature} sx={{ py: 0.5 }}>
                            <ListItemText primary={feature} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Divider sx={{ mb: 6 }} />

            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Tech Stack
                </Typography>

                <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
                    Frontend
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {['React Native', 'Expo', 'TanStack Router', 'TanStack Query', 'TypeScript'].map(
                        (tech) => (
                            <Chip key={tech} label={tech} />
                        )
                    )}
                </Stack>

                <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
                    Backend
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {['Go', 'Gin', 'GORM', 'gqlgen', 'GraphQL', 'PostgreSQL', 'zap', 'tern'].map(
                        (tech) => (
                            <Chip key={tech} label={tech} />
                        )
                    )}
                </Stack>

                <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
                    Infrastructure
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {['Docker', 'Terraform', 'GitHub Actions', 'AWS'].map((tech) => (
                        <Chip key={tech} label={tech} />
                    ))}
                </Stack>

                <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
                    Integrations
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {['Spotify API', 'Apple Music API (planned)'].map((tech) => (
                        <Chip key={tech} label={tech} />
                    ))}
                </Stack>
            </Box>

            <Divider sx={{ mb: 6 }} />

            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    Platforms
                </Typography>
                <Stack direction="row" spacing={1}>
                    {['iOS', 'Android', 'Web'].map((platform) => (
                        <Chip key={platform} label={platform} color="primary" variant="outlined" />
                    ))}
                </Stack>
            </Box>
        </Container>
    )
}
