import { useState, useEffect } from 'react';

function SinglePostFetcher() {
    const [postId, setPostId] = useState('');
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (postId === '') return;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Post not found');
                }
                return res.json();
            })
            .then((data) => {
                setPost(data);
                setError('');
                console.log('Fetched Post:', data); // ✅ Post object will be logged here
            })
            .catch((err) => {
                setError(err.message);
                setPost(null);
            });
    }, [postId]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>📄 Fetch Post by ID</h2>
            <input
                style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                type="number"
                min="1"
                max="100"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                placeholder="Enter Post ID (1-100)"
            />
            <br /><br />
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}
            {post && (
                <div style={{ border: '1px solid #ccc', padding: '10px', width: '400px' }}>
                    <h3>📝 {post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
}

export default SinglePostFetcher;
