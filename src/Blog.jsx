import React, { useState } from 'react';
import styled from 'styled-components';

const BlogGenerator = () => {
  const [blogs, setBlogs] = useState([]);

  const generateBlog = () => {
    // Generate random blog content
    const randomContent = generateRandomContent();

    // Create a new blog object
    const newBlog = {
      id: blogs.length + 1,
      content: randomContent,
    };

    // Add the new blog to the list
    setBlogs([...blogs, newBlog]);
  };

  const generateRandomContent = () => {
    // Generate random content for the blog
    const title = generateRandomSentence();
    const body = generateRandomParagraphs();

    return `# ${title}\n\n${body}`;
  };

  const generateRandomSentence = () => {
    // List of random sentences
    const sentences = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla facilisi. Quisque sed quam auctor, lobortis tortor eu, commodo tellus.',
      'Sed condimentum risus et est laoreet luctus.',
      'Vestibulum varius felis ac augue tincidunt aliquet.',
      'Nam scelerisque eros a sapien iaculis hendrerit.',
      'Etiam euismod tellus et risus ultricies, vel accumsan urna pellentesque.',
    ];

    // Randomly select a sentence
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[randomIndex];

    return sentence;
  };

  const generateRandomParagraphs = () => {
    // Generate random paragraphs
    const paragraphs = [];
    const numParagraphs = Math.floor(Math.random() * 3) + 1; // Randomly generate between 1 and 3 paragraphs

    for (let i = 0; i < numParagraphs; i++) {
      const paragraph = generateRandomParagraph();
      paragraphs.push(paragraph);
    }

    // Join paragraphs with line breaks
    const content = paragraphs.join('\n\n');

    return content;
  };

  const generateRandomParagraph = () => {
    // List of random sentences
    const sentences = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla facilisi. Quisque sed quam auctor, lobortis tortor eu, commodo tellus.',
      'Sed condimentum risus et est laoreet luctus.',
      'Vestibulum varius felis ac augue tincidunt aliquet.',
      'Nam scelerisque eros a sapien iaculis hendrerit.',
      'Etiam euismod tellus et risus ultricies, vel accumsan urna pellentesque.',
    ];

    // Randomly select sentences to form a paragraph
    const numSentences = Math.floor(Math.random() * 5) + 2; // Randomly generate between 2 and 6 sentences

    const paragraph = [];

    for (let i = 0; i < numSentences; i++) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const sentence = sentences[randomIndex];
      paragraph.push(sentence);
    }

    // Join sentences with spaces
    const formattedParagraph = paragraph.join(' ');

    return formattedParagraph;
  };

  return (
    <Container>
      <h2>Blog Generator</h2>
      <Button onClick={generateBlog}>Generate Blog</Button>
      <BlogList>
        <h3>Generated Blogs</h3>
        {blogs.map(blog => (
          <BlogItem key={blog.id}>
            <h4>Blog #{blog.id}</h4>
            <BlogContent>{blog.content}</BlogContent>
          </BlogItem>
        ))}
      </BlogList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BlogList = styled.div`
  margin-top: 20px;
`;

const BlogItem = styled.div`
  margin-bottom: 20px;
`;

const BlogContent = styled.pre`
  background-color: #f7f7f7;
  padding: 10px;
  white-space: pre-wrap;
`;

export default BlogGenerator;
