import { comments, IComment } from "../data";
import { redirect } from "next/navigation";
export async function GET(_request: Request,
    { params }: { params: { id: string } }
) {
    if (parseInt(params.id) > comments.length) {
        redirect('/comments')
    }
    const comment: IComment | undefined = comments.find(comment => comment.id === parseInt(params.id))
    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: { params: { id: string; } }) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex(
        comment => comment.id === parseInt(params.id)
    )

    comments[index].text = text;

    return Response.json(comments[index])
}

export async function DELETE(request: Request, { params }: { params: { id: string; } }) {
    // first way delete item
    const index = comments.findIndex(
        comment => comment.id === parseInt(params.id)
    )
    const deleteComment = comments[index]
    comments.splice(index, 1)

    // second way delete item
    // const index = comments.findIndex(
    //     comment => comment.id === parseInt(params.id)
    // )
    // const deleteComment = comments[index]
    // const deleteCurrentComment = comments.filter(item => item.id !== parseInt(params.id))
    // console.log(deleteCurrentComment)
    return Response.json(deleteComment)

}