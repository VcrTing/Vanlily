import member from '../../../screen/member/member.vue'
import MemberCreat from '../../../screen/member/creat/MemberCreat.vue'
import MemberEdit from '../../../screen/member/edit/MemberEdit.vue'
import member_iist from '../../../screen/member/iist/member_iist.vue'

export default (head) => {
    return [
        {
            path: 'member_iist',
            component: member_iist,
        },
        {
            path: head,
            component: member,
            children: [
                {
                    path: head + '/member_creat',
                    component: MemberCreat
                },

                {
                    path: head + '/member_edit',
                    component: MemberEdit
                }
            ]
        }
    ]
}