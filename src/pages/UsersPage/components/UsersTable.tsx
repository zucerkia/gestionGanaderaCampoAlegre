import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import type { UserTableData, Users } from '../models'

type Props = {
  users: Users
}
const UsersTable = ({ users }: Props) => {
  const productData: UserTableData[] = users.map((item) => ({
    ...item,
    key: item.documentNumber,
  }))

  const columns: TableColumnsType<UserTableData> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    { title: 'Correo electrónico', dataIndex: 'email', key: 'email' },
    {
      title: 'Tipo de documento',
      dataIndex: 'documentType',
      key: 'documentType',
    },
    {
      title: 'Número de documento',
      dataIndex: 'documentNumber',
      key: 'documentNumber',
    },
  ]

  return <Table columns={columns} dataSource={productData} />
}

export default UsersTable
