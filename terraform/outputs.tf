output "vpc_id" { value=module.network.vpc_id }
output "compute_security_group_id" { value=module.compute.security_group_id }
output "database_endpoint" { value=module.database.endpoint }