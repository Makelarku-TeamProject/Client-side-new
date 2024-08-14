import React, { useEffect } from 'react';
import Layout from '../components/Admin/LayoutComponent';

const MemberPage = () => {
 
  return (
    <Layout>
      <main className="p-4 min-vh-50">
        <div className="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
          <div class="container">
            <h6 className="display-4 mb-2 text-primary">Welcome, Member</h6>
            <p className="lead text-muted">Halaman Member Makelarku</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MemberPage;
