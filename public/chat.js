// ChatGPT-like response formatting in public/chat.js

function formatResponse(message) {
    let formatted = '';
    
    // Formatting for markdown
    formatted += '**ChatGPT Response:**\n';
    formatted += message;
    
    // Add support for tables
    formatted += '\n\n| Column 1 | Column 2 |\n|----------|----------|\n| Data 1  | Data 2  |\n\n';
    
    // Add support for images
    formatted += '![Alt Text](URL-to-image)\n';
    
    // Add support for lists
    formatted += '\n- Item 1\n- Item 2\n- Item 3\n';
    
    return formatted;
}

// Example usage
console.log(formatResponse('This is a sample response.'));