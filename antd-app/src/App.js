import React from 'react';
import './App.css';
import { Layout } from 'antd';
import MenuComponent from './components/MenuComponent';
import ContentComponent from './components/ContentComponent';
import FormComponent from './components/FormComponent';

const { Header, Content, Footer } = Layout;

const App = () => {
  const cardData = [
    { id: 1, title: 'Card 1', content: 'MAIB' },
    { id: 2, title: 'Card 2', content: 'MICB ' },
    { id: 3, title: 'Card 3', content: 'VICTORIABANK ' },
  ];

  return (
      <Layout>
        <Header>
          <MenuComponent />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <h2>Content</h2>
            <ContentComponent data={cardData} />
            <h2>Form</h2>
            <FormComponent />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
  );
};

export default App;
