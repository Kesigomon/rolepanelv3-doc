import React from "react"
import {graphql, PageProps} from "gatsby";


const commandPage = ({data: {commandsJson: data}}: PageProps<GatsbyTypes.CommandPageQuery>) => {
    const name = data?.commandName ?? data?.command?.name;
    return (
        <div>
            <h1>
                {name}
            </h1>
            {data?.command?.description}
        </div>
    )
}
export default commandPage

export const query = graphql`
  query CommandPage($id: String!) {
    commandsJson(id: {eq: $id}) {
    commandName
    command {
      name
      description
      type
      options {
        description
        name
        required
        type
      }
    }
  }
}`