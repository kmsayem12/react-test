import styled from 'styled-components'

const HomeStyles = styled.div`
  .content {
    padding: 20px;
  }
`

const HeaderStyles = styled.div`
  .header {
    margin-top: 3.12rem;
    h2 {
      text-align: center;
    }
    .search {
      display: flex;
      flex-dcaration: row;
      .add-btn {
        margin-left: 0.62rem;
      }
    }
  }
`

const HomeCardItemStyles = styled.div`
  .ant-card-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 1rem 0;
    }
  }
`

export { HomeStyles, HeaderStyles, HomeCardItemStyles }
