import {
	openDatabase,
	SQLError,
	SQLResultSet,
	SQLStatementCallback,
	SQLTransaction,
	WebSQLDatabase,
} from 'expo-sqlite'

const DATABASE_NAME: string = 'PetSitters'

//Open DB
//Create  a transaction
export const transaction = (
	name: string = DATABASE_NAME,
): Promise<SQLTransaction> => {
	const db: WebSQLDatabase = openDatabase(name)

	return new Promise((resolve, reject) =>
		db.transaction(
			(tx: SQLTransaction) => resolve(tx),
			(txError: SQLError) => reject(txError),
		),
	)
}

export interface statementReturnType {
	res: SQLResultSet
	tx: SQLTransaction
}

export const statement = (
	tx: SQLTransaction,
	sql: string,
	params?: any[] | undefined,
): Promise<SQLResultSet> => {
	return new Promise((resolve, reject) => {
		tx.executeSql(
			sql,
			params,
			(tx: SQLTransaction, res: SQLResultSet) => resolve(res),
			(tx: SQLTransaction, error: SQLError) => {
				reject(error)
				return false
			},
		)
	})
}