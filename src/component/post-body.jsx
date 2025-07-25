import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div
        style={{maxWidth: 700}}
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
